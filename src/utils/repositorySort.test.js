import { sortRepositories } from "./repositorySort";

const repositoriesFixture = [
  { id: 1, name: "zeta", stargazers_count: 14 },
  { id: 2, name: "alpha", stargazers_count: 33 },
  { id: 3, name: "bravo", stargazers_count: 21 },
];

describe("sortRepositories", () => {
  it("orders repositories by stars descending by default", () => {
    const repositories = sortRepositories(repositoriesFixture, "stars_desc");

    expect(repositories.map((repository) => repository.name)).toEqual([
      "alpha",
      "bravo",
      "zeta",
    ]);
  });

  it("orders repositories by stars ascending", () => {
    const repositories = sortRepositories(repositoriesFixture, "stars_asc");

    expect(repositories.map((repository) => repository.name)).toEqual([
      "zeta",
      "bravo",
      "alpha",
    ]);
  });

  it("orders repositories alphabetically", () => {
    const repositories = sortRepositories(repositoriesFixture, "name_asc");

    expect(repositories.map((repository) => repository.name)).toEqual([
      "alpha",
      "bravo",
      "zeta",
    ]);
  });

  it("does not mutate the original repository list", () => {
    const originalRepositories = [...repositoriesFixture];

    sortRepositories(repositoriesFixture, "name_desc");

    expect(repositoriesFixture).toEqual(originalRepositories);
  });
});

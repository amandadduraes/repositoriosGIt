export const repositorySortOptions = [
  { value: "stars_desc", label: "Mais estrelas" },
  { value: "stars_asc", label: "Menos estrelas" },
  { value: "name_asc", label: "Nome (A-Z)" },
  { value: "name_desc", label: "Nome (Z-A)" },
];

export function sortRepositories(repositories, sortOption) {
  const sortableRepositories = [...repositories];

  switch (sortOption) {
    case "stars_asc":
      return sortableRepositories.sort(
        (firstRepository, secondRepository) =>
          firstRepository.stargazers_count - secondRepository.stargazers_count,
      );

    case "name_asc":
      return sortableRepositories.sort((firstRepository, secondRepository) =>
        firstRepository.name.localeCompare(secondRepository.name),
      );

    case "name_desc":
      return sortableRepositories.sort((firstRepository, secondRepository) =>
        secondRepository.name.localeCompare(firstRepository.name),
      );

    case "stars_desc":
    default:
      return sortableRepositories.sort(
        (firstRepository, secondRepository) =>
          secondRepository.stargazers_count - firstRepository.stargazers_count,
      );
  }
}

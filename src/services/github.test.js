import { vi } from "vitest";

const { getMock } = vi.hoisted(() => ({
  getMock: vi.fn(),
}));

vi.mock("axios", () => ({
  default: {
    create: vi.fn(() => ({
      get: getMock,
    })),
  },
}));

import {
  fetchUserRepositories,
  getReadableErrorMessage,
} from "./github";

describe("github service", () => {
  beforeEach(() => {
    getMock.mockReset();
  });

  it("fetches repository pages until it finds a page with fewer than 100 items", async () => {
    const firstPage = Array.from({ length: 100 }, (_, index) => ({
      id: index + 1,
    }));
    const secondPage = [{ id: 101 }, { id: 102 }];

    getMock
      .mockResolvedValueOnce({ data: firstPage })
      .mockResolvedValueOnce({ data: secondPage });

    const repositories = await fetchUserRepositories("fabpot");

    expect(getMock).toHaveBeenNthCalledWith(1, "/users/fabpot/repos", {
      params: { page: 1, per_page: 100 },
    });
    expect(getMock).toHaveBeenNthCalledWith(2, "/users/fabpot/repos", {
      params: { page: 2, per_page: 100 },
    });
    expect(repositories).toHaveLength(102);
  });

  it("returns a friendly message for a rate-limit error", () => {
    const errorMessage = getReadableErrorMessage({
      response: { status: 403 },
    });

    expect(errorMessage).toBe(
      "Limite da API do GitHub atingido. Aguarde alguns minutos e tente novamente.",
    );
  });

  it("returns a fallback message for an unknown error", () => {
    const errorMessage = getReadableErrorMessage({});

    expect(errorMessage).toBe(
      "Ocorreu um erro inesperado ao consultar a API do GitHub.",
    );
  });
});

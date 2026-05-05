import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github+json",
  },
});

export async function fetchUser(username) {
  const response = await githubApi.get(`/users/${username}`);
  return response.data;
}

export async function fetchUserRepositories(username) {
  const repositories = [];
  let page = 1;
  let keepFetching = true;

  while (keepFetching) {
    const response = await githubApi.get(`/users/${username}/repos`, {
      params: {
        page,
        per_page: 100,
      },
    });

    repositories.push(...response.data);
    keepFetching = response.data.length === 100;
    page += 1;
  }

  return repositories;
}

export async function fetchRepository(username, repoName) {
  const response = await githubApi.get(`/repos/${username}/${repoName}`);
  return response.data;
}

export function getReadableErrorMessage(error) {
  if (error.response?.status === 404) {
    return "Usuario ou repositorio nao encontrado. Verifique o identificador informado.";
  }

  if (error.response?.status === 403) {
    return "Limite da API do GitHub atingido. Aguarde alguns minutos e tente novamente.";
  }

  if (error.code === "ERR_NETWORK") {
    return "Falha de rede ao acessar a API do GitHub. Confirme sua conexao com a internet.";
  }

  return "Ocorreu um erro inesperado ao consultar a API do GitHub.";
}

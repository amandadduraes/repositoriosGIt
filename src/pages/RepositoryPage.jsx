import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import LoadingState from "../components/LoadingState";
import RepositoryDetailsCard from "../components/RepositoryDetailsCard";
import SearchForm from "../components/SearchForm";
import { fetchRepository, getReadableErrorMessage } from "../services/github";

function RepositoryPage() {
  const navigate = useNavigate();
  const { username, repoName } = useParams();
  const [repository, setRepository] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let ignore = false;

    async function loadRepository() {
      setLoading(true);
      setErrorMessage("");

      try {
        const data = await fetchRepository(username, repoName);

        if (!ignore) {
          setRepository(data);
        }
      } catch (error) {
        if (!ignore) {
          setErrorMessage(getReadableErrorMessage(error));
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadRepository();

    return () => {
      ignore = true;
    };
  }, [repoName, username]);

  return (
    <div className="d-flex flex-column gap-4">
      <SearchForm compact initialValue={username} onSearch={(value) => navigate(`/users/${value}`)} />

      <div className="d-flex flex-wrap gap-3 align-items-center justify-content-between">
        <Link className="btn btn-outline-secondary" to={`/users/${username}`}>
          Voltar para o perfil
        </Link>

        <p className="mb-0 text-secondary">
          Detalhes completos do repositorio selecionado.
        </p>
      </div>

      {loading ? <LoadingState label="Carregando detalhes do repositorio..." /> : null}
      {!loading && errorMessage ? <ErrorMessage message={errorMessage} /> : null}
      {!loading && !errorMessage && repository ? (
        <RepositoryDetailsCard repository={repository} />
      ) : null}
    </div>
  );
}

export default RepositoryPage;

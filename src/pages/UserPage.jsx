import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import EmptyState from "../components/EmptyState";
import ErrorMessage from "../components/ErrorMessage";
import LoadingState from "../components/LoadingState";
import RepositoryList from "../components/RepositoryList";
import SearchForm from "../components/SearchForm";
import UserSummaryCard from "../components/UserSummaryCard";
import {
  fetchUser,
  fetchUserRepositories,
  getReadableErrorMessage,
} from "../services/github";
import { sortRepositories } from "../utils/repositorySort";

function UserPage() {
  const navigate = useNavigate();
  const { username } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const sortOption = searchParams.get("sort") || "stars_desc";
  const sortedRepositories = sortRepositories(repositories, sortOption);

  useEffect(() => {
    let ignore = false;

    async function loadUserData() {
      setLoading(true);
      setErrorMessage("");

      try {
        const [userData, repositoriesData] = await Promise.all([
          fetchUser(username),
          fetchUserRepositories(username),
        ]);

        if (!ignore) {
          setUser(userData);
          setRepositories(repositoriesData);
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

    loadUserData();

    return () => {
      ignore = true;
    };
  }, [username]);

  const handleSortChange = (nextSort) => {
    setSearchParams({ sort: nextSort });
  };

  const handleSearch = (nextUsername) => {
    navigate(`/users/${nextUsername}`);
  };

  return (
    <div className="d-flex flex-column gap-4">
      <SearchForm compact initialValue={username} onSearch={handleSearch} />

      {loading ? <LoadingState label="Buscando perfil e repositorios..." /> : null}
      {!loading && errorMessage ? <ErrorMessage message={errorMessage} /> : null}

      {!loading && !errorMessage && user ? <UserSummaryCard user={user} /> : null}

      {!loading && !errorMessage && repositories.length > 0 ? (
        <RepositoryList
          repositories={sortedRepositories}
          sortOption={sortOption}
          onSortChange={handleSortChange}
          username={username}
        />
      ) : null}

      {!loading && !errorMessage && repositories.length === 0 ? (
        <EmptyState
          title="Nenhum repositorio publico encontrado"
          description="O usuario existe, mas nao possui repositorios publicos para exibir."
        />
      ) : null}
    </div>
  );
}

export default UserPage;

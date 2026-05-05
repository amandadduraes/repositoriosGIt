import { Link } from "react-router-dom";
import { repositorySortOptions } from "../utils/repositorySort";

function RepositoryList({
  repositories,
  sortOption,
  onSortChange,
  username,
}) {
  return (
    <section className="content-card">
      <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mb-4">
        <div>
          <span className="section-kicker">Repositorios</span>
          <h2 className="h3 mb-1">Lista ordenavel</h2>
          <p className="text-secondary mb-0">
            {repositories.length} repositorio(s) encontrado(s).
          </p>
        </div>

        <div className="sort-box">
          <label className="form-label mb-2" htmlFor="repository-sort">
            Ordenar por
          </label>
          <select
            id="repository-sort"
            className="form-select"
            value={sortOption}
            onChange={(event) => onSortChange(event.target.value)}
          >
            {repositorySortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row g-4">
        {repositories.map((repository) => (
          <div className="col-12 col-md-6" key={repository.id}>
            <article className="repository-card h-100">
              <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
                <div>
                  <h3 className="h4 mb-2">{repository.name}</h3>
                  <p className="text-secondary mb-0">
                    {repository.description || "Sem descricao informada."}
                  </p>
                </div>
                <span className="badge-chip badge-highlight">
                  {repository.stargazers_count} stars
                </span>
              </div>

              <div className="d-flex flex-wrap gap-2 mb-4">
                <span className="badge-chip">{repository.language || "Sem linguagem"}</span>
                <span className="badge-chip">{repository.forks_count} forks</span>
                <span className="badge-chip">{repository.watchers_count} watchers</span>
              </div>

              <div className="d-flex justify-content-between align-items-center gap-3 mt-auto">
                <small className="text-secondary">
                  Atualizado em{" "}
                  {new Intl.DateTimeFormat("pt-BR", {
                    dateStyle: "short",
                  }).format(new Date(repository.updated_at))}
                </small>

                <Link
                  className="btn btn-outline-primary"
                  to={`/users/${username}/repos/${repository.name}`}
                >
                  Ver detalhes
                </Link>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RepositoryList;

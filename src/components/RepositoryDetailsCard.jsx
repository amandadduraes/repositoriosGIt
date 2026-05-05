function RepositoryDetailsCard({ repository }) {
  const topics = repository.topics ?? [];

  return (
    <section className="content-card">
      <div className="d-flex flex-column flex-lg-row justify-content-between gap-3 mb-4">
        <div>
          <span className="detail-kicker">Repositorio</span>
          <h2 className="h1 mt-2 mb-2">{repository.name}</h2>
          <p className="text-secondary mb-0">
            {repository.description || "Este repositorio nao possui descricao."}
          </p>
        </div>

        <div className="d-flex align-items-start">
          <a
            className="btn btn-primary btn-lg"
            href={repository.html_url}
            target="_blank"
            rel="noreferrer"
          >
            Abrir no GitHub
          </a>
        </div>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-sm-6 col-lg-3">
          <div className="stat-panel">
            <span className="stat-label">Estrelas</span>
            <strong>{repository.stargazers_count}</strong>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="stat-panel">
            <span className="stat-label">Forks</span>
            <strong>{repository.forks_count}</strong>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="stat-panel">
            <span className="stat-label">Watchers</span>
            <strong>{repository.watchers_count}</strong>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="stat-panel">
            <span className="stat-label">Issues abertas</span>
            <strong>{repository.open_issues_count}</strong>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-6">
          <div className="detail-group">
            <span className="detail-label">Linguagem principal</span>
            <p className="mb-0">{repository.language || "Nao informada"}</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="detail-group">
            <span className="detail-label">Licenca</span>
            <p className="mb-0">{repository.license?.name || "Nao informada"}</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="detail-group">
            <span className="detail-label">Branch padrao</span>
            <p className="mb-0">{repository.default_branch}</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="detail-group">
            <span className="detail-label">Tamanho</span>
            <p className="mb-0">{repository.size} KB</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="detail-group">
            <span className="detail-label">Criado em</span>
            <p className="mb-0">
              {new Intl.DateTimeFormat("pt-BR", {
                dateStyle: "long",
              }).format(new Date(repository.created_at))}
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="detail-group">
            <span className="detail-label">Ultima atualizacao</span>
            <p className="mb-0">
              {new Intl.DateTimeFormat("pt-BR", {
                dateStyle: "long",
                timeStyle: "short",
              }).format(new Date(repository.updated_at))}
            </p>
          </div>
        </div>
        <div className="col-12">
          <div className="detail-group">
            <span className="detail-label">Topicos</span>
            <div className="d-flex flex-wrap gap-2">
              {topics.length > 0 ? (
                topics.map((topic) => (
                  <span className="badge-chip" key={topic}>
                    {topic}
                  </span>
                ))
              ) : (
                <p className="mb-0">Nenhum topico informado.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RepositoryDetailsCard;

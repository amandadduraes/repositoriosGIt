function formatLink(link) {
  if (!link) {
    return null;
  }

  return link.startsWith("http") ? link : `https://${link}`;
}

function UserSummaryCard({ user }) {
  return (
    <section className="content-card">
      <div className="row g-4 align-items-center">
        <div className="col-12 col-lg-4">
          <div className="profile-media text-center text-lg-start">
            <img
              className="profile-avatar"
              src={user.avatar_url}
              alt={`Avatar de ${user.login}`}
            />
          </div>
        </div>

        <div className="col-12 col-lg-8">
          <div className="d-flex flex-column gap-3">
            <div>
              <span className="section-kicker">Perfil encontrado</span>
              <h2 className="display-6 mb-1">{user.name || user.login}</h2>
              <p className="text-secondary mb-0">@{user.login}</p>
            </div>

            <p className="lead mb-0">
              {user.bio || "Este usuario ainda nao adicionou uma bio publica."}
            </p>

            <div className="row g-3">
              <div className="col-sm-6 col-xl-3">
                <div className="stat-panel">
                  <span className="stat-label">Seguidores</span>
                  <strong>{user.followers}</strong>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="stat-panel">
                  <span className="stat-label">Seguindo</span>
                  <strong>{user.following}</strong>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="stat-panel">
                  <span className="stat-label">Repos publicos</span>
                  <strong>{user.public_repos}</strong>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="stat-panel">
                  <span className="stat-label">Empresa</span>
                  <strong>{user.company || "-"}</strong>
                </div>
              </div>
            </div>

            <div className="row g-3">
              <div className="col-md-6">
                <div className="detail-group">
                  <span className="detail-label">Localizacao</span>
                  <p className="mb-0">{user.location || "Nao informada"}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="detail-group">
                  <span className="detail-label">Email</span>
                  <p className="mb-0">{user.email || "Nao publico"}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="detail-group">
                  <span className="detail-label">Blog / site</span>
                  {user.blog ? (
                    <a href={formatLink(user.blog)} target="_blank" rel="noreferrer">
                      {user.blog}
                    </a>
                  ) : (
                    <p className="mb-0">Nao informado</p>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="detail-group">
                  <span className="detail-label">Perfil no GitHub</span>
                  <a href={user.html_url} target="_blank" rel="noreferrer">
                    {user.html_url}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserSummaryCard;

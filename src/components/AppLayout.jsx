import { Link, useLocation } from "react-router-dom";

function AppLayout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="app-shell">
      <header className="app-hero">
        <div className="container py-4 py-lg-5">
          <div className="d-flex flex-column gap-4">
            <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between gap-3">
              <div className="hero-copy">
                <span className="hero-kicker">Desafio Front-End</span>
                <h1 className="display-5 fw-semibold mb-3">
                  Descubra os repositórios mais fortes de qualquer perfil do
                  GitHub.
                </h1>
                <p className="hero-description mb-0">
                  Busca de usuário, ordenação de repositórios e detalhes completos
                  com navegação client-side.
                </p>
              </div>

              {!isHome ? (
                <div className="hero-actions">
                  <Link className="btn btn-light btn-lg px-4" to="/">
                    Nova busca
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </header>

      <main className="pb-5">
        <div className="container content-wrapper">{children}</div>
      </main>
    </div>
  );
}

export default AppLayout;

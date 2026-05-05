import { useNavigate } from "react-router-dom";
import SearchForm from "../components/SearchForm";

const featuredUsers = ["torvalds", "gaearon", "yyx990803", "fabpot"];

function HomePage() {
  const navigate = useNavigate();

  const handleSearch = (username) => {
    navigate(`/users/${username}`);
  };

  return (
    <div className="d-flex flex-column gap-4 gap-lg-5">
      <section className="content-card content-card-accent">
        <div className="row g-4 align-items-center">
          <div className="col-12 col-lg-7">
            <span className="section-kicker">Busca inteligente</span>
            <h2 className="display-6 mb-3">
              Explore perfis, compare repositorios e encontre os projetos mais
              relevantes de um usuario.
            </h2>
            <p className="text-secondary mb-0">
              A aplicacao consome a API publica do GitHub, ordena os repositorios
              por estrelas e entrega uma navegacao clara entre perfil e detalhes
              do repositorio.
            </p>
          </div>

          <div className="col-12 col-lg-5">
            <SearchForm onSearch={handleSearch} />
          </div>
        </div>
      </section>

      <section className="row g-4">
        <div className="col-12 col-lg-8">
          <div className="content-card h-100">
            <span className="section-kicker">Fluxo da aplicacao</span>
            <div className="row g-3 mt-1">
              <div className="col-md-4">
                <div className="mini-card">
                  <strong>1. Buscar</strong>
                  <p className="mb-0 text-secondary">
                    Digite um usuario do GitHub para iniciar a consulta.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mini-card">
                  <strong>2. Analisar</strong>
                  <p className="mb-0 text-secondary">
                    Veja detalhes do perfil e os repositorios ordenados.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mini-card">
                  <strong>3. Navegar</strong>
                  <p className="mb-0 text-secondary">
                    Entre no detalhe do repositorio e abra o GitHub.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-4">
          <div className="content-card h-100">
            <span className="section-kicker">Sugestoes rapidas</span>
            <div className="d-flex flex-wrap gap-2 mt-3">
              {featuredUsers.map((username) => (
                <button
                  key={username}
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={() => handleSearch(username)}
                >
                  {username}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

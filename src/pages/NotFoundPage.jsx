import { Link } from "react-router-dom";
import EmptyState from "../components/EmptyState";

function NotFoundPage() {
  return (
    <div className="d-flex flex-column gap-4">
      <EmptyState
        title="Pagina nao encontrada"
        description="A rota acessada nao existe nesta aplicacao."
      />

      <div className="text-center">
        <Link className="btn btn-primary" to="/">
          Voltar para a busca
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;

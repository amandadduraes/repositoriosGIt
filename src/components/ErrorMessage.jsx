function ErrorMessage({ message }) {
  return (
    <div className="alert alert-danger shadow-sm border-0" role="alert">
      <strong className="d-block mb-1">Nao foi possivel concluir a busca.</strong>
      <span>{message}</span>
    </div>
  );
}

export default ErrorMessage;

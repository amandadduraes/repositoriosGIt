function LoadingState({ label = "Carregando dados do GitHub..." }) {
  return (
    <div className="content-card py-5">
      <div className="d-flex flex-column align-items-center gap-3">
        <div className="spinner-border text-primary" role="status" />
        <p className="mb-0 text-secondary">{label}</p>
      </div>
    </div>
  );
}

export default LoadingState;

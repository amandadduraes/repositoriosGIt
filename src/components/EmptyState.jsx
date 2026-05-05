function EmptyState({ title, description }) {
  return (
    <div className="content-card text-center py-5">
      <div className="empty-state-icon mb-3">?</div>
      <h2 className="h4 mb-2">{title}</h2>
      <p className="text-secondary mb-0">{description}</p>
    </div>
  );
}

export default EmptyState;

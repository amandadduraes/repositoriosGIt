import { useEffect, useState } from "react";

function SearchForm({ initialValue = "", onSearch, compact = false }) {
  const [username, setUsername] = useState(initialValue);

  useEffect(() => {
    setUsername(initialValue);
  }, [initialValue]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const normalizedUsername = username.trim();

    if (!normalizedUsername) {
      return;
    }

    onSearch(normalizedUsername);
  };

  return (
    <form className={compact ? "search-panel compact" : "search-panel"} onSubmit={handleSubmit}>
      <div className="row g-3 align-items-end">
        <div className="col-12 col-lg-8">
          <label className="form-label" htmlFor="github-username">
            Usuario do GitHub
          </label>
          <input
            id="github-username"
            className="form-control form-control-lg"
            type="text"
            placeholder="Ex.: torvalds"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="col-12 col-lg-4">
          <button className="btn btn-primary btn-lg w-100" type="submit">
            Buscar perfil
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;

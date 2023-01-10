import Button from "../Button";

import "./style.css";

function SearchBar({ value, setValue, onSubmit, toggleFormModal }) {
  return (
    <div className="search-container">
      <form onSubmit={onSubmit}>
        <div className="search-input">
          <i className="bi bi-search"></i>
          <input
            type="text"
            placeholder="Pesquisar..."
            value={value}
            onChange={setValue}
          />
        </div>
      </form>
      <Button text="Adicionar" onClick={toggleFormModal} />
    </div>
  );
}

export default SearchBar;

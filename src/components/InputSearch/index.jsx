import "./style.css";

function InputSearch({ value, setValue }) {
  return (
    <div className="search">
      <i className="bi bi-search"></i>
      <input
        type="text"
        placeholder="Pesquisar..."
        value={value}
        onChange={setValue}
      />
    </div>
  );
}

export default InputSearch;

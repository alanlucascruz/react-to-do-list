import "./style.css";

function Select({ label, options, value, setValue, showError, errorMessage }) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <select value={value} onChange={setValue}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.description}
          </option>
        ))}
      </select>
      {showError && <div className="input-error">{errorMessage}</div>}
    </div>
  );
}

export default Select;

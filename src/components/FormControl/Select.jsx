import "./style.css";

function Select({ label, options }) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <select>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.description}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;

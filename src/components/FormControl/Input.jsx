import "./style.css";

function Input({
  label,
  type,
  placeholder,
  value,
  setValue,
  showError,
  errorMessage,
}) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        onChange={setValue}
      />
      {showError && <div className="input-error">{errorMessage}</div>}
    </div>
  );
}

export default Input;

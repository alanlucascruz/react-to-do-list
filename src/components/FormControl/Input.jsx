import "./style.css";

function Input({ label, type = "text", placeholder }) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}

export default Input;

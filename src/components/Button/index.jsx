import "./style.css";

function Button({ type, text, color, disabled, onClick }) {
  return (
    <button
      type={type || "button"}
      className={`btn btn-${color || "blue"}`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;

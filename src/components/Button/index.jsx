import "./style.css";

function Button({ text, color = "blue", onClick }) {
  return (
    <button className={`btn btn-${color}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;

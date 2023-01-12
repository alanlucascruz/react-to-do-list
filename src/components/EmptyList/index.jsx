import "./style.css";

function EmptyList({ text }) {
  return <div className="empty-list">{text || "Nada encontrado"}</div>;
}

export default EmptyList;

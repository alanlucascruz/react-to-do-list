import "./style.css";

function Content({ children, loading }) {
  return loading ? (
    <div className="loading">Carregando...</div>
  ) : (
    <div id="content">{children}</div>
  );
}

export default Content;

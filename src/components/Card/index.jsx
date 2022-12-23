import "./style.css";

function Card({ title, subtitle, children }) {
  return (
    <div className="card">
      {title && (
        <div className="card-title">
          <h2>{title}</h2>
          {subtitle && <h4>{subtitle}</h4>}
        </div>
      )}
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;

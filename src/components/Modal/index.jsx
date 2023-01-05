import "./style.css";

function Modal({ show, toggle, title, body, footer }) {
  return (
    <div className={`modal ${show && "show"}`} onClick={toggle}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="title">{title}</h2>
          <h2 className="modal-close" onClick={toggle}>
            X
          </h2>
        </div>
        <div className="modal-body">{body}</div>
        <div className="modal-footer">{footer}</div>
      </div>
    </div>
  );
}

export default Modal;

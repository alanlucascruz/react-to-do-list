import "./style.css";

function Modal({ show, toggle, title, Body, Footer }) {
  return (
    <div className={`modal ${show && "show"}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="title">{title}</h2>
          <h2 className="modal-close" onClick={toggle}>
            X
          </h2>
        </div>
        <div className="modal-body">
          <Body />
        </div>
        <div className="modal-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Modal;

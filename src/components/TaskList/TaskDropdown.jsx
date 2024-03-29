import { Fragment } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown";

function TaskDropdown({ onEdit, onDelete, setTaskStatus, showEditOption }) {
  return (
    <Dropdown
      base={
        <div className="options">
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      }
      content={
        <Fragment>
          {showEditOption && (
            <Fragment>
              <Link onClick={onEdit}>
                <i className="bi bi-pencil-square"></i> Editar
              </Link>
              <Link onClick={onDelete}>
                <i className="bi bi-trash"></i> Excluir
              </Link>
              <div className="dropdown-divider"></div>
            </Fragment>
          )}
          <Link onClick={() => setTaskStatus("pending")}>
            <i className="bi bi-circle"></i> Pendente
          </Link>
          <Link onClick={() => setTaskStatus("progress")}>
            <i className="bi bi-check2"></i> Em Progresso
          </Link>
          <Link onClick={() => setTaskStatus("done")}>
            <i className="bi bi-check2-all"></i> Completo
          </Link>
        </Fragment>
      }
      top={true}
    />
  );
}

export default TaskDropdown;

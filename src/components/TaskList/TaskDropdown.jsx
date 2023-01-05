import { Fragment } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown";

function TaskDropdown({ edit }) {
  return (
    <Dropdown
      base={
        <div className="options">
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      }
      content={
        <Fragment>
          {edit && (
            <Fragment>
              <Link>
                <i className="bi bi-pencil-square"></i> Editar
              </Link>
              <Link>
                <i className="bi bi-trash"></i> Excluir
              </Link>
              <div className="dropdown-divider"></div>
            </Fragment>
          )}
          <Link>
            <i className="bi bi-circle"></i> Pendente
          </Link>
          <Link>
            <i className="bi bi-check2"></i> Em Progresso
          </Link>
          <Link>
            <i className="bi bi-check2-all"></i> Completo
          </Link>
        </Fragment>
      }
      top={true}
    />
  );
}

export default TaskDropdown;

import { Fragment } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../../../components/Dropdown";

function CategoryDropdown() {
  return (
    <Dropdown
      Base={() => (
        <div className="options">
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      )}
      Content={() => (
        <Fragment>
          <Link>
            <i className="bi bi-pencil-square"></i> Editar
          </Link>
          <Link>
            <i className="bi bi-trash"></i> Excluir
          </Link>
        </Fragment>
      )}
    />
  );
}

export default CategoryDropdown;

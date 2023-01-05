import { Fragment } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../../../components/Dropdown";

function CategoryDropdown({ onEdit, onDelete }) {
  return (
    <Dropdown
      base={
        <div className="options">
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      }
      content={
        <Fragment>
          <Link onClick={onEdit}>
            <i className="bi bi-pencil-square"></i> Editar
          </Link>
          <Link onClick={onDelete}>
            <i className="bi bi-trash"></i> Excluir
          </Link>
        </Fragment>
      }
    />
  );
}

export default CategoryDropdown;

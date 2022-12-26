import { Fragment } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown";

function HeaderDropdown() {
  return (
    <Dropdown
      Base={() => (
        <div className="user">
          <h4>Alan Cruz</h4>
          <i className="bi bi-person-fill"></i>
        </div>
      )}
      Content={() => (
        <Fragment>
          <Link to="/">
            <i className="bi bi-person"></i> Editar Perfil
          </Link>
          <Link to="/">
            <i className="bi bi-lock"></i> Alterar Senha
          </Link>
          <Link to="/auth">
            <i className="bi bi-box-arrow-right"></i> Sair
          </Link>
        </Fragment>
      )}
    />
  );
}

export default HeaderDropdown;

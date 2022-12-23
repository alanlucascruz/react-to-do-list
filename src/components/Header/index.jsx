import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleSidebarMenu } from "../../store/slices/sidebarMenuSlice";
import Dropdown from "../Dropdown";
import "./style.css";

function Header({ title }) {
  const dispatch = useDispatch();

  return (
    <div id="header">
      <span
        className="sidebar-button"
        onClick={() => dispatch(toggleSidebarMenu())}
      >
        <i className="bi bi-list"></i>
      </span>

      <h2 className="title">{title}</h2>

      <div className="options">
        <Dropdown>
          <div className="user">
            <h4>Alan Cruz</h4>
            <i className="bi bi-person-fill"></i>
          </div>

          <div className="dropdown-content">
            <Link to="/">
              <i className="bi bi-person"></i> Editar Perfil
            </Link>
            <Link to="/">
              <i className="bi bi-lock"></i> Alterar Senha
            </Link>
            <Link to="/">
              <i className="bi bi-box-arrow-right"></i> Sair
            </Link>
          </div>
        </Dropdown>
      </div>
    </div>
  );
}

export default Header;

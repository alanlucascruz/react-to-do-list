import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation } from "react-router-dom";
import { toggleSidebarMenu } from "../../store/slices/sidebarMenuSlice";
import "./style.css";

const SidebarMenu = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const { showSidebarMenu: show } = useSelector((state) => state.sidebarMenu);

  const toggleSidebar = () => dispatch(toggleSidebarMenu());

  return (
    <Fragment>
      <div
        className={`sidebar-backdrop ${show && "show"}`}
        onClick={toggleSidebar}
      ></div>

      <nav id="sidebar" className={`sidebar ${show && "show"}`}>
        <h2 className="title">
          <i className="bi bi-ui-checks-grid"></i>
          tasks.
        </h2>

        <ul>
          <Link to="/" onClick={toggleSidebar}>
            <li className={`${pathname === "/" && "active"}`}>
              <i className="bi bi-graph-up"></i>
              Dashboard
            </li>
          </Link>

          <Link to="/tasks" onClick={toggleSidebar}>
            <li className={`${pathname === "/tasks" && "active"}`}>
              <i className="bi bi-list-task"></i>
              Tarefas
            </li>
          </Link>

          <Link to="/categories" onClick={toggleSidebar}>
            <li className={`${pathname === "/categories" && "active"}`}>
              <i className="bi bi-tags"></i>
              Categorias
            </li>
          </Link>
        </ul>
      </nav>

      <main id="main">
        <Outlet />
      </main>
    </Fragment>
  );
};

export default SidebarMenu;

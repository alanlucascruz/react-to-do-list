import { useDispatch } from "react-redux";
import { toggleSidebarMenu } from "../../store/slices/sidebarMenuSlice";
import HeaderDropdown from "./HeaderDropdown";

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
        <HeaderDropdown />
      </div>
    </div>
  );
}

export default Header;

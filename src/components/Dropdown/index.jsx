import { Fragment } from "react";
import "./style.css";

function Dropdown({ children }) {
  return (
    <Fragment>
      <div className="dropdown">{children}</div>
    </Fragment>
  );
}

export default Dropdown;

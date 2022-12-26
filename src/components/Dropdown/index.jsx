import { Fragment } from "react";
import "./style.css";

function Dropdown({ Base, Content, top = false }) {
  return (
    <Fragment>
      <div className="dropdown">
        <Base />
        <div className={`dropdown-content ${top && "dropdown-top"}`}>
          <Content />
        </div>
      </div>
    </Fragment>
  );
}

export default Dropdown;

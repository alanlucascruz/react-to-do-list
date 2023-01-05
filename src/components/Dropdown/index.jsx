import { Fragment } from "react";
import "./style.css";

function Dropdown({ base, content, top = false }) {
  return (
    <Fragment>
      <div className="dropdown">
        {base}
        <div className={`dropdown-content ${top && "dropdown-top"}`}>
          {content}
        </div>
      </div>
    </Fragment>
  );
}

export default Dropdown;

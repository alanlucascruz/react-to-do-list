import CategoryDropdown from "./CategoryDropdown";

import "./style.css";

function CategoryList({ data }) {
  return data.map((item, index) => (
    <div className="item" key={index}>
      <div className="content">
        <div className="color" style={{ backgroundColor: item.color }}></div>
        <div className="title">{item.description}</div>
      </div>

      <CategoryDropdown />
    </div>
  ));
}

export default CategoryList;

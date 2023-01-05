import { useDispatch } from "react-redux";
import CategoryDropdown from "./CategoryDropdown";

import "./style.css";
import { deleteCategoryRequest } from "../../../store/slices/categorySlice";

function CategoryList({ data }) {
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(deleteCategoryRequest(id));
  };

  if (!data.length) {
    return <div className="empty">Nada encontrado</div>;
  }

  return data.map((item, index) => (
    <div className="item" key={index}>
      <div className="content">
        <div className="color" style={{ backgroundColor: item.color }}></div>
        <div className="title">{item.description}</div>
      </div>

      <CategoryDropdown onEdit={() => {}} onDelete={() => onDelete(item._id)} />
    </div>
  ));
}

export default CategoryList;

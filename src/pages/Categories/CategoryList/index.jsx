import { useDispatch, useSelector } from "react-redux";
import { deleteCategoryRequest } from "../../../store/slices/categorySlice";

import CategoryDropdown from "./CategoryDropdown";
import EmptyList from "../../../components/EmptyList";

import "./style.css";

function CategoryList({ toggleFormModal }) {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.category);

  const onEdit = (item) => {
    toggleFormModal(item);
  };

  const onDelete = (id) => {
    dispatch(deleteCategoryRequest(id));
  };

  if (!data.length) {
    return <EmptyList />;
  }

  return data.map((item, index) => (
    <div className="item" key={index}>
      <div className="content">
        <div className="color" style={{ backgroundColor: item.color }}></div>
        <div className="title">{item.description}</div>
      </div>

      <CategoryDropdown
        onEdit={() => onEdit(item)}
        onDelete={() => onDelete(item._id)}
      />
    </div>
  ));
}

export default CategoryList;

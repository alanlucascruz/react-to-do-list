import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryRequest } from "../../store/slices/categorySlice";

import Content from "../../components/Content";
import Header from "../../components/Header";
import Card from "../../components/Card";
import CategoryList from "./CategoryList";
import CategoryModal from "./CategoryModal";
import Search from "./Search";

import "./style.css";

function Categories() {
  const [showFormModal, setShowFormModal] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoryRequest("loading"));
  }, [dispatch]);

  const toggleFormModal = (editItem = null) => {
    setEditItem(editItem);
    setShowFormModal(!showFormModal);
  };

  return (
    <div id="categories">
      <Header title="Categorias" />

      <Content loading={status === "loading"}>
        <div className="container">
          <Card>
            <Search toggleFormModal={() => toggleFormModal()} />
            <CategoryList toggleFormModal={(item) => toggleFormModal(item)} />
          </Card>
        </div>
      </Content>

      <CategoryModal
        show={showFormModal}
        toggle={() => toggleFormModal()}
        editItem={editItem}
      />
    </div>
  );
}

export default Categories;

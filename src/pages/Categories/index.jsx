import { Fragment, useState } from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryRequest } from "../../store/slices/categorySlice";

import Content from "../../components/Content";
import Header from "../../components/Header";
import Card from "../../components/Card";
import InputSearch from "../../components/InputSearch";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Input from "../../components/FormControl/Input";
import CategoryList from "./CategoryList";
import RadioColor from "./RadioColor";

import "./style.css";

function Categories() {
  const [showAddModal, setShowAddModal] = useState(false);

  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoryRequest("loading"));
  }, [dispatch]);

  const toggleAddModal = () => setShowAddModal(!showAddModal);

  return (
    <div id="categories">
      <Header title="Categorias" />

      {status === "loading" ? (
        <div className="loading-message">Carregando...</div>
      ) : (
        <Content>
          <div className="container">
            <Card>
              <div className="search-container">
                <InputSearch />
                <Button text="Adicionar" onClick={toggleAddModal} />
              </div>

              <CategoryList data={data} />
            </Card>
          </div>
        </Content>
      )}

      <Modal
        show={showAddModal}
        toggle={toggleAddModal}
        title="Categoria"
        Body={() => (
          <div className="form-container">
            <Input label="Descrição" placeholder="Informe a descrição..." />
            <RadioColor />
          </div>
        )}
        Footer={() => (
          <Fragment>
            <Button text="Cancelar" color="gray" onClick={toggleAddModal} />
            <Button text="Salvar" />
          </Fragment>
        )}
      />
    </div>
  );
}

export default Categories;

import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../../components/Modal";
import Input from "../../components/FormControl/Input";
import RadioColor from "./RadioColor";
import Button from "../../components/Button";
import { postCategoryRequest } from "../../store/slices/categorySlice";

function CategoryModal({ show, toggle }) {
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [triedToSubmit, setTriedToSubmit] = useState(false);

  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.category);

  const onSubmit = () => {
    setTriedToSubmit(true);

    if (!(description && color)) return;

    dispatch(postCategoryRequest({ description, color }));

    resetForm();
    toggle();
  };

  const resetForm = () => {
    setDescription("");
    setColor("");
    setTriedToSubmit(false);
  };

  return (
    <Modal
      show={show}
      toggle={toggle}
      title="Categoria"
      body={
        <div className="form-container">
          <Input
            label="Descrição"
            placeholder="Informe a descrição..."
            value={description}
            setValue={(e) => setDescription(e.target.value)}
            showError={triedToSubmit && description === ""}
            errorMessage="Campo obrigatório"
          />

          <RadioColor
            checked={color}
            onChange={(e) => setColor(e.target.value)}
            showError={triedToSubmit && color === ""}
            errorMessage="Selecione uma cor (Obrigatório)"
          />
        </div>
      }
      footer={
        <Fragment>
          <Button text="Cancelar" color="gray" onClick={toggle} />
          <Button
            text={status === "sending" ? "Aguarde..." : "Salvar"}
            disabled={status === "sending"}
            onClick={onSubmit}
          />
        </Fragment>
      }
    />
  );
}

export default CategoryModal;

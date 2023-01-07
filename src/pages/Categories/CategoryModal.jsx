import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  postCategoryRequest,
  putCategoryRequest,
} from "../../store/slices/categorySlice";

import Modal from "../../components/Modal";
import Input from "../../components/FormControl/Input";
import RadioColor from "./RadioColor";
import Button from "../../components/Button";

function CategoryModal({ show, toggle, editItem }) {
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [triedToSubmit, setTriedToSubmit] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = () => {
    setTriedToSubmit(true);

    if (!(description && color)) return;

    const data = { description, color };

    if (editItem) {
      const { _id: id } = editItem;
      dispatch(putCategoryRequest(id, data));
    } else {
      dispatch(postCategoryRequest(data));
    }

    toggle();
  };

  const resetForm = () => {
    setDescription("");
    setColor("");
    setTriedToSubmit(false);
  };

  useEffect(() => {
    resetForm();

    if (editItem) {
      setDescription(editItem.description);
      setColor(editItem.color);
    }
  }, [editItem, toggle]);

  return (
    <Modal
      show={show}
      toggle={toggle}
      title="Categoria"
      body={
        <Fragment>
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
        </Fragment>
      }
      footer={
        <Fragment>
          <Button text="Cancelar" color="gray" onClick={toggle} />
          <Button text="Salvar" onClick={onSubmit} />
        </Fragment>
      }
    />
  );
}

export default CategoryModal;

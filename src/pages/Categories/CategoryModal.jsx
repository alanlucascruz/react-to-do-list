import { Fragment } from "react";

import Modal from "../../components/Modal";
import Input from "../../components/FormControl/Input";
import RadioColor from "./RadioColor";
import Button from "../../components/Button";

function CategoryModal({ show, toggle }) {
  return (
    <Modal
      show={show}
      toggle={toggle}
      title="Categoria"
      Body={() => (
        <div className="form-container">
          <Input label="Descrição" placeholder="Informe a descrição..." />
          <RadioColor />
        </div>
      )}
      Footer={() => (
        <Fragment>
          <Button text="Cancelar" color="gray" onClick={toggle} />
          <Button text="Salvar" />
        </Fragment>
      )}
    />
  );
}

export default CategoryModal;

import { Fragment } from "react";
import Modal from "../Modal";
import Input from "../FormControl/Input";
import Button from "../Button";

function ProfileModal({ show, toggle }) {
  return (
    <Modal
      show={show}
      toggle={toggle}
      title="Editar Perfil"
      body={
        <Fragment>
          <Input label="Nome" placeholder="Insira o seu nome" />
          <Input
            label="E-mail"
            placeholder="Insira o seu e-mail"
            type="email"
          />
        </Fragment>
      }
      footer={
        <Fragment>
          <Button text="Cancelar" color="gray" onClick={toggle} />
          <Button text="Salvar" />
        </Fragment>
      }
    />
  );
}

export default ProfileModal;

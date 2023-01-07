import { Fragment } from "react";
import Modal from "../Modal";
import Input from "../FormControl/Input";
import Button from "../Button";

function PasswordModal({ show, toggle }) {
  return (
    <Modal
      show={show}
      toggle={toggle}
      title="Alterar Senha"
      body={
        <Fragment>
          <Input
            label="Antiga Senha"
            placeholder="Insira a sua antiga senha"
            type="password"
          />

          <Input
            label="Nova Senha"
            placeholder="Insira a nova senha"
            type="password"
          />

          <Input
            label="Confirme a Senha"
            placeholder="Confirme a nova senha"
            type="password"
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

export default PasswordModal;

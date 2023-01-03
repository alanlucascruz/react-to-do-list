import { Fragment } from "react";
import Modal from "../../components/Modal";
import Input from "../../components/FormControl/Input";
import Select from "../../components/FormControl/Select";
import Button from "../../components/Button";

function TaksModal({ show, toggle }) {
  return (
    <Modal
      show={show}
      toggle={toggle}
      title="Tarefa"
      Body={() => (
        <div className="form-container">
          <Input label="Descrição" placeholder="Informe a descrição..." />

          <Select
            label="Categoria"
            options={[
              { value: 1, description: "Trabalho" },
              { value: 2, description: "Casa" },
              { value: 3, description: "Faculdade" },
            ]}
          />

          <Select
            label="Prioridade"
            options={[
              { value: "low", description: "Baixa" },
              { value: "medium", description: "Média" },
              { value: "high", description: "Alta" },
            ]}
          />

          <Select
            label="Situação"
            options={[
              { value: "pending", description: "Pendente" },
              { value: "progress", description: "Em progresso" },
              { value: "done", description: "Completo" },
            ]}
          />

          <Input
            label="Completado em"
            type="date"
            placeholder="Informe a data..."
          />
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

export default TaksModal;
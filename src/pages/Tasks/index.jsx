import { Fragment, useState } from "react";
import Content from "../../components/Content";
import Header from "../../components/Header";
import Card from "../../components/Card";
import TasksComponent from "../../components/Tasks";
import InputSearch from "../../components/InputSearch";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Input from "../../components/FormControl/Input";
import Select from "../../components/FormControl/Select";
import "./style.css";

function Tasks() {
  const [showAddModal, setShowAddModal] = useState(false);

  const toggleAddModal = () => setShowAddModal(!showAddModal);

  return (
    <Fragment>
      <Header title="Tarefas" />

      <Content>
        <div className="container">
          <Card>
            <div className="search-container">
              <InputSearch />
              <Button text="Adicionar" onClick={toggleAddModal} />
            </div>

            <TasksComponent showDate={true} />
          </Card>
        </div>
      </Content>

      <Modal
        show={showAddModal}
        toggle={toggleAddModal}
        title={"Adicionar Tarefa"}
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
            <Button text="Cancelar" color="gray" onClick={toggleAddModal} />
            <Button text="Salvar" />
          </Fragment>
        )}
      />
    </Fragment>
  );
}

export default Tasks;

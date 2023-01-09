import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postTaskRequest, putTaskRequest } from "../../store/slices/taskSlice";

import Modal from "../../components/Modal";
import Input from "../../components/FormControl/Input";
import Select from "../../components/FormControl/Select";
import Button from "../../components/Button";

function TaskModal({ show, toggle, editItem }) {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [completedAt, setCompletedAt] = useState("");
  const [triedToSubmit, setTriedToSubmit] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = () => {
    setTriedToSubmit(true);

    if (
      !(description && category && priority && status) ||
      (status === "done" && !completedAt)
    ) {
      console.log("Obrigatório");
      return;
    }

    const data = {
      description,
      category,
      priority,
      status,
      completed_at: completedAt,
    };

    console.log(data);

    // if (editItem) {
    //   const { _id: id } = editItem;
    //   dispatch(putTaskRequest(id, data));
    // } else {
    //   dispatch(postTaskRequest(data));
    // }

    // toggle();
  };

  const resetForm = () => {
    setDescription("");
    setCategory("");
    setPriority("low");
    setStatus("pending");
    setCompletedAt("");
    setTriedToSubmit(false);
  };

  useEffect(() => {
    resetForm();

    // if (editItem) {
    //   setDescription(editItem.description);
    //   setCategory(editItem.category);
    //   setPriority(editItem.priority);
    //   setStatus(editItem.status);
    //   setCompletedAt(editItem.completed_at);
    // }
  }, [editItem, toggle]);

  useEffect(() => {
    const currentDate = new Date().toISOString().slice(0, 10);

    status === "done" ? setCompletedAt(currentDate) : setCompletedAt("");
  }, [status]);

  return (
    <Modal
      show={show}
      toggle={toggle}
      title="Tarefa"
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

          <Select
            label="Categoria"
            options={[
              { value: 1, description: "Trabalho" },
              { value: 2, description: "Casa" },
              { value: 3, description: "Faculdade" },
            ]}
            value={category}
            setValue={(e) => setCategory(e.target.value)}
            showError={triedToSubmit && category === ""}
            errorMessage="Campo obrigatório"
          />

          <Select
            label="Prioridade"
            options={[
              { value: "low", description: "Baixa" },
              { value: "medium", description: "Média" },
              { value: "high", description: "Alta" },
            ]}
            value={priority}
            setValue={(e) => setPriority(e.target.value)}
          />

          <Select
            label="Situação"
            options={[
              { value: "pending", description: "Pendente" },
              { value: "progress", description: "Em progresso" },
              { value: "done", description: "Completo" },
            ]}
            value={status}
            setValue={(e) => setStatus(e.target.value)}
          />

          {status === "done" && (
            <Input
              label="Completado em"
              type="date"
              value={completedAt}
              setValue={(e) => setCompletedAt(e.target.value)}
              showError={triedToSubmit && completedAt === ""}
              errorMessage="Campo obrigatório"
            />
          )}
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

export default TaskModal;

import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const { data: categoryData } = useSelector((state) => state.category);

  const categoryOptions = useMemo(() => {
    return categoryData?.map((item) => {
      return { value: item._id, description: item.description };
    });
  }, [categoryData]);

  const onSubmit = () => {
    setTriedToSubmit(true);

    if (
      !(description && category && priority && status) ||
      (status === "done" && !completedAt)
    )
      return;

    const data = {
      description,
      category,
      priority,
      status,
      completed_at: completedAt,
    };

    if (editItem) {
      const { _id: id } = editItem;
      dispatch(putTaskRequest(id, data));
    } else {
      dispatch(postTaskRequest(data));
    }

    toggle();
  };

  const resetForm = useCallback(() => {
    setDescription("");
    setCategory(categoryOptions[0]?.value || "");
    setPriority("low");
    setStatus("pending");
    setCompletedAt("");
    setTriedToSubmit(false);
  }, [categoryOptions]);

  useEffect(() => {
    resetForm();

    if (editItem) {
      setDescription(editItem.description);
      setCategory(editItem.category?._id || categoryOptions[0]?.value);
      setPriority(editItem.priority);
      setStatus(editItem.status);
      setCompletedAt(editItem.completed_at?.slice(0, 10) || "");
    }
  }, [editItem, toggle, resetForm, categoryOptions]);

  useEffect(() => {
    if (!(status === "done")) setCompletedAt("");
  }, [status]);

  const categoryLabel = () => {
    return categoryOptions?.length
      ? "Categoria"
      : "Categoria (Por favor, cadastre uma categoria)";
  };

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
            label={categoryLabel()}
            options={categoryOptions}
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

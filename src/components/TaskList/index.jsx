import { useDispatch } from "react-redux";
import {
  deleteTaskRequest,
  putTaskRequest,
} from "../../store/slices/taskSlice";

import EmptyList from "../EmptyList";
import TaskDropdown from "./TaskDropdown";

import "./style.css";

function TaskList({
  data,
  toggleFormModal,
  showEditOption = false,
  emptyListText = "",
}) {
  const dispatch = useDispatch();

  const onEdit = (item) => {
    toggleFormModal(item);
  };

  const onDelete = (id) => {
    dispatch(deleteTaskRequest(id));
  };

  const setTaskStatus = (id, status) => {
    let completedAt = "";

    if (status === "done") {
      completedAt = new Date().toISOString().slice(0, 10);
    }

    dispatch(putTaskRequest(id, { status, completed_at: completedAt }));
  };

  const Priority = ({ priority }) => {
    let icon = "bi-caret-up-fill";

    if (priority === "low") {
      icon = "bi-caret-down-fill";
    }

    return (
      <div className={`priority ${priority}`} title="Prioridade">
        <i className={`bi ${icon}`}></i>
      </div>
    );
  };

  const Status = ({ status }) => {
    const statusList = {
      done: "Completo",
      progress: "Em Progresso",
      pending: "Pendente",
    };

    return <div className={`badge ${status}`}>{statusList[status]}</div>;
  };

  const completedAtFormatted = (date) => {
    var dateFormatted = "Pendente";

    if (date) {
      date = new Date(date);
      date.setDate(date.getDate() + 1);

      dateFormatted = date.toLocaleDateString();
    }

    return dateFormatted;
  };

  if (!data.length) {
    return <EmptyList text={emptyListText} />;
  }

  return (
    <div className="tasks">
      {data.map((item, index) => (
        <div className="item" key={index}>
          <div className="content">
            <div className="mobile-wrap">
              <Priority priority={item.priority} />
              <div className="title">{item.description}</div>
            </div>

            <div className="status">
              <Status status={item.status} />
            </div>

            <div className="category" title="Categoria">
              <i
                className="bi bi-tags-fill"
                style={{ color: item.category?.color || "#ffffff" }}
              ></i>
              {item.category?.description || "Sem categoria"}
            </div>

            <div className="date" title="Data de conclusão">
              <i className="bi bi-calendar2-event"></i>
              {completedAtFormatted(item.completed_at)}
            </div>
          </div>

          <TaskDropdown
            editOption={showEditOption}
            onEdit={() => onEdit(item)}
            onDelete={() => onDelete(item._id)}
            setTaskStatus={(status) => setTaskStatus(item._id, status)}
          />
        </div>
      ))}
    </div>
  );
}

export default TaskList;

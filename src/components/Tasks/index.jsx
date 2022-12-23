import { Link } from "react-router-dom";
import Dropdown from "../Dropdown";
import "./style.css";

function Tasks({ showDate = false }) {
  const data = [
    {
      priority: "low",
      description: "Reunião de definição e planejamento",
      status: "done",
      category: "Trabalho",
      color: "#00c1fd",
      completed_at: "Incompleto",
    },
    {
      priority: "medium",
      description: "Limpar no final de semana",
      status: "pending",
      category: "Casa",
      color: "#00B96D",
      completed_at: "10/12/2022",
    },
    {
      priority: "low",
      description: "Trabalho de Banco de Dados",
      status: "progress",
      category: "Faculdade",
      color: "#DEBD12",
      completed_at: "10/12/2022",
    },
    {
      priority: "high",
      description: "Banho no Cachorro",
      status: "pending",
      category: "Afazeres",
      color: "#FF6B56",
      completed_at: "10/12/2022",
    },
    {
      priority: "medium",
      description: "Finalizar curso de Node.JS",
      status: "done",
      category: "Pessoal",
      color: "#7E44FF",
      completed_at: "10/12/2022",
    },
    {
      priority: "high",
      description: "Finalizar curso de React (To Do List)",
      status: "pending",
      category: "Pessoal",
      color: "#7E44FF",
      completed_at: "10/12/2022",
    },
  ];

  const Priority = ({ priority }) => {
    let icon = "bi-caret-up-fill";

    if (priority === "low") {
      icon = "bi-caret-down-fill";
    }

    return (
      <div className={`priority ${priority}`}>
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

  return (
    <div className="tasks">
      {data.map((item, index) => (
        <div className="item" key={index}>
          <div className="content">
            <div className="title-wrap">
              <Priority priority={item.priority} />

              <div className="title">{item.description}</div>
            </div>

            <div className="status-wrap">
              <div className="status">
                <Status status={item.status} />
              </div>

              <div className="category">
                <i
                  className="bi bi-tags-fill"
                  style={{ color: item.color }}
                ></i>
                {item.category}
              </div>
            </div>

            {showDate && (
              <div className="date">
                <i className="bi bi-calendar2-event"></i> {item.completed_at}
              </div>
            )}
          </div>

          <Dropdown>
            <div className="options">
              <i className="bi bi-three-dots-vertical"></i>
            </div>

            <div
              className={`dropdown-content ${
                index === data.length - 1 && "dropdown-content-top"
              }`}
            >
              <Link>
                <i className="bi bi-circle"></i> Pendente
              </Link>
              <Link>
                <i className="bi bi-check2"></i> Em Progresso
              </Link>
              <Link>
                <i className="bi bi-check2-all"></i> Completo
              </Link>
            </div>
          </Dropdown>
        </div>
      ))}
    </div>
  );
}

export default Tasks;

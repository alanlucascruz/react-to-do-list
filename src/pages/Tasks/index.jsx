import { useState } from "react";
import Content from "../../components/Content";
import Header from "../../components/Header";
import Card from "../../components/Card";
import TaskList from "../../components/TaskList";
import SearchBar from "../../components/SearchBar";
import TaskModal from "./TaskModal";

import "./style.css";

function Tasks() {
  const [showFormModal, setShowFormModal] = useState(false);

  const toggleFormModal = () => setShowFormModal(!showFormModal);

  return (
    <div id="tasks">
      <Header title="Tarefas" />

      <Content>
        <div className="container">
          <Card>
            <SearchBar toggleFormModal={() => toggleFormModal()} />
            <TaskList showDate={true} edit={true} />
          </Card>
        </div>
      </Content>

      <TaskModal toggle={toggleFormModal} show={showFormModal} />
    </div>
  );
}

export default Tasks;

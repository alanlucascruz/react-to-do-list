import { useState } from "react";
import Content from "../../components/Content";
import Header from "../../components/Header";
import Card from "../../components/Card";
import TaskList from "../../components/TaskList";
import InputSearch from "../../components/InputSearch";
import Button from "../../components/Button";

import "./style.css";
import TaksModal from "./TaskModal";

function Tasks() {
  const [showAddModal, setShowAddModal] = useState(false);

  const toggleAddModal = () => setShowAddModal(!showAddModal);

  return (
    <div id="tasks">
      <Header title="Tarefas" />

      <Content>
        <div className="container">
          <Card>
            <div className="search-container">
              <InputSearch />
              <Button text="Adicionar" onClick={toggleAddModal} />
            </div>

            <TaskList showDate={true} edit={true} />
          </Card>
        </div>
      </Content>

      <TaksModal toggle={toggleAddModal} show={showAddModal} />
    </div>
  );
}

export default Tasks;

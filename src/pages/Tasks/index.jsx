import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTaskRequest } from "../../store/slices/taskSlice";

import Content from "../../components/Content";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Search from "./Search";
import TaskList from "../../components/TaskList";
import TaskModal from "./TaskModal";

import "./style.css";

function Tasks() {
  const [showFormModal, setShowFormModal] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.task);

  useEffect(() => {
    dispatch(getTaskRequest("loading"));
  }, [dispatch]);

  const toggleFormModal = (editItem = null) => {
    setShowFormModal(!showFormModal);
    setEditItem(editItem);
  };

  return (
    <div id="tasks">
      <Header title="Tarefas" />

      <Content loading={status === "loading"}>
        <div className="container">
          <Card>
            <Search toggleFormModal={() => toggleFormModal()} />
            <TaskList showDate={true} edit={true} />
          </Card>
        </div>
      </Content>

      <TaskModal
        toggle={toggleFormModal}
        show={showFormModal}
        editItem={editItem}
      />
    </div>
  );
}

export default Tasks;

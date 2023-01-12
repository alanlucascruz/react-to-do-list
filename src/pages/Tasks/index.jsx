import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTaskRequest } from "../../store/slices/taskSlice";
import { getCategoryRequest } from "../../store/slices/categorySlice";

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
  const { status: taskStatus, data } = useSelector((state) => state.task);
  const { status: categoryStatus } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getTaskRequest("loading"));
    dispatch(getCategoryRequest("loading"));
  }, [dispatch]);

  const toggleFormModal = (editItem = null) => {
    setShowFormModal(!showFormModal);
    setEditItem(editItem);
  };

  const isLoading = () => {
    return taskStatus === "loading" || categoryStatus === "loading";
  };

  return (
    <div id="tasks">
      <Header title="Tarefas" />

      <Content loading={isLoading()}>
        <div className="container">
          <Card>
            <Search toggleFormModal={() => toggleFormModal()} />
            <TaskList
              data={data}
              toggleFormModal={(item) => toggleFormModal(item)}
              showEditOption
            />
          </Card>
        </div>
      </Content>

      <TaskModal
        toggle={() => toggleFormModal()}
        show={showFormModal}
        editItem={editItem}
      />
    </div>
  );
}

export default Tasks;

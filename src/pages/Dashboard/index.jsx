import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardRequest } from "../../store/slices/dashboardSlice";
import { getTaskRequest } from "../../store/slices/taskSlice";

import Header from "../../components/Header";
import Content from "../../components/Content";
import Card from "../../components/Card";
import ChartLine from "./ChartLine";
import TaskList from "../../components/TaskList";
import Categories from "./Categories";

import "./style.css";

function Dashboard() {
  const dispatch = useDispatch();

  const { status: dashboardStatus } = useSelector((state) => state.dashboard);

  const { data: taskData, status: taskStatus } = useSelector(
    (state) => state.task
  );

  const taskDataFormatted = useMemo(() => taskData.slice(0, 7), [taskData]);

  useEffect(() => {
    dispatch(getTaskRequest("loading"));
    dispatch(getDashboardRequest("loading"));
  }, [dispatch]);

  const isLoading = () => {
    return dashboardStatus === "loading" || taskStatus === "loading";
  };

  return (
    <div id="dashboard">
      <Header title="Dashboard" />

      <Content loading={isLoading()}>
        <div className="row">
          <div className="col">
            <Card title="Produtividade Diária" subtitle="Últimos 20 dias">
              <div className="chart-container">
                <ChartLine />
              </div>
            </Card>

            <Card
              title="Próximas Tarefas"
              subtitle="Acesse o menu Tarefas para ver mais"
            >
              <TaskList
                data={taskDataFormatted}
                showEditOption={false}
                emptyListText="Ainda não há dados sufientes"
              />
            </Card>
          </div>

          <div className="col">
            <Card title="Categorias" subtitle="Progresso atual">
              <Categories />
            </Card>
          </div>
        </div>
      </Content>
    </div>
  );
}

export default Dashboard;

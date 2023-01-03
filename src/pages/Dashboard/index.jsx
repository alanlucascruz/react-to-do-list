import Header from "../../components/Header";
import Content from "../../components/Content";
import Card from "../../components/Card";
import ChartLine from "./ChartLine";
import Categories from "./Categories";
import TasksList from "../../components/TaskList";
import "./style.css";

function Dashboard() {
  return (
    <div id="dashboard">
      <Header title="Dashboard" />

      <Content>
        <div className="row">
          <div className="col">
            <Card title="Produtividade Diária" subtitle="Últimos 15 dias">
              <div className="chart-container">
                <ChartLine />
              </div>
            </Card>

            <Card title="Próximas Tarefas">
              <TasksList />
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

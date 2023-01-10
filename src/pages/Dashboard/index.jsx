import Header from "../../components/Header";
import Content from "../../components/Content";
import Card from "../../components/Card";
import ChartLine from "./ChartLine";
import Categories from "./Categories";
import TaskList from "../../components/TaskList";
import "./style.css";

function Dashboard() {
  return (
    <div id="dashboard">
      <Header title="Dashboard" />

      <Content>
        <div className="row">
          <div className="col">
            <Card title="Produtividade Diária" subtitle="Últimos 20 dias">
              <div className="chart-container">
                <ChartLine />
              </div>
            </Card>

            <Card title="Próximas Tarefas">
              {/* <TaskList showDate={false} showEditOption={false} /> */}
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

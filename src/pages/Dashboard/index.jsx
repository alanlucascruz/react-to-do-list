import { Fragment } from "react";
import Header from "../../components/Header";
import Content from "../../components/Content";
import Card from "../../components/Card";
import ChartLine from "./ChartLine";
import Categories from "./Categories";
import Tasks from "../../components/Tasks";
import "./style.css";

function Dashboard() {
  return (
    <Fragment>
      <Header title="Dashboard" />

      <Content>
        <div className="row">
          <div className="col">
            <Card title="Produtividade Diária" subtitle="Último mês">
              <div className="chart-container">
                <ChartLine />
              </div>
            </Card>

            <Card title="Próximas Tarefas">
              <Tasks />
            </Card>
          </div>

          <div className="col">
            <Card title="Categorias" subtitle="Progresso atual">
              <Categories />
            </Card>
          </div>
        </div>
      </Content>
    </Fragment>
  );
}

export default Dashboard;

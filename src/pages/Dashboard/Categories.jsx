import { useSelector } from "react-redux";
import EmptyList from "../../components/EmptyList";

function Categories() {
  const { data } = useSelector((state) => state.dashboard);

  if (!data.categoryProgress.length) {
    return <EmptyList text="Ainda não há dados sufientes" />;
  }

  return (
    <div className="categories">
      {data.categoryProgress.map((item, index) => (
        <div
          key={index}
          className="card"
          style={{ borderLeftColor: item.color }}
        >
          <h4>{`${item.tasks} tarefas`}</h4>
          <h2>{item.category}</h2>
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{
                width: item.percentage_done,
                backgroundColor: item.color,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;

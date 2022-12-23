function Categories() {
  const data = [
    {
      tasks: 40,
      category: "Trabalho",
      color: "#00c1fd",
      progress: "40%",
    },
    {
      tasks: 28,
      category: "Casa",
      color: "#00B96D",
      progress: "71%",
    },
    {
      tasks: 17,
      category: "Faculdade",
      color: "#DEBD12",
      progress: "87%",
    },
    {
      tasks: 10,
      category: "Afazeres",
      color: "#FF6B56",
      progress: "37%",
    },
    {
      tasks: 25,
      category: "Pessoal",
      color: "#7E44FF",
      progress: "62%",
    },
  ];

  return (
    <div className="categories">
      {data.map((item, index) => (
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
              style={{ width: item.progress, backgroundColor: item.color }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;

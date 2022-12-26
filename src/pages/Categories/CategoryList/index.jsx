import CategoryDropdown from "./CategoryDropdown";
import "./style.css";

function CategoryList() {
  const data = [
    {
      description: "Trabalho",
      color: "#00c1fd",
    },
    {
      description: "Casa",
      color: "#00B96D",
    },
    {
      description: "Faculdade",
      color: "#DEBD12",
    },
    {
      description: "Afazeres",
      color: "#FF6B56",
    },
    {
      description: "Pessoal",
      color: "#7E44FF",
    },
  ];

  return data.map((item, index) => (
    <div className="item" key={index}>
      <div className="content">
        <div className="color" style={{ backgroundColor: item.color }}></div>
        <div className="title">{item.description}</div>
      </div>

      <CategoryDropdown />
    </div>
  ));
}

export default CategoryList;

import "./style.css";

function RadioColor() {
  const colors = [
    "#0F8DED", // blue
    "#00C1FD", // light blue
    "#00B96D", // green
    "#DEBD12", // yellow
    "#FDF2AD", // light yellow
    "#FF6B56", // light red
    "#EC0039", // red
    "#BA138B", // pink
    "#FA6FE2", // light pink
    "#7E44FF", // light purple
    "#4744FD", // purple,
    "#7C7066", // brown
  ];

  return (
    <div className="radio-color">
      <label className="radio-color-label">Selecione a cor</label>

      <div className="radio-color-item">
        {colors.map((color, index) => (
          <label key={index}>
            <input type="radio" name="radio-color" value={color} />
            <span style={{ backgroundColor: color }}></span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default RadioColor;

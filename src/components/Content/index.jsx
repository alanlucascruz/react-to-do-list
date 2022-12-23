import "./style.css";

function Content({ children, flexDirection }) {
  return (
    <div
      id="content"
      style={{
        flexDirection: flexDirection || "row",
      }}
    >
      {children}
    </div>
  );
}

export default Content;

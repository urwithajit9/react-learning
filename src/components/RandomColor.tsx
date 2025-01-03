export default function RandomColor() {
  let colors: string[] = [];
  for (let i = 0; i < 10; i++) {
    const randomcolor = Math.floor(Math.random() * 16777215).toString(16);
    colors.push("#".concat(randomcolor));
  }

  return (
    <div>
      {colors.map((color) => (
        <p
          key={color}
          style={{
            background: color,
            color: "white",
            textAlign: "center",
            height: "40px",
            padding: "5px",
          }}
        >
          {color}
        </p>
      ))}
    </div>
  );
}

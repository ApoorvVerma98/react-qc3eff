import React, { useState } from "react";
import "./style.css";



function App() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div style={{ backgroundColor }}>
      <div>
        <ColorButton color="green" onClick={() => handleBackgroundColorChange("green")} />
        <ColorButton color="blue" onClick={() => handleBackgroundColorChange("blue")} />
        <ColorButton color="black" onClick={() => handleBackgroundColorChange("black")} />
        <ColorButton color="red" onClick={() => handleBackgroundColorChange("red")} />
        <ColorButton color="orange" onClick={() => handleBackgroundColorChange("orange")} />
      </div>
    </div>
  );
}

function ColorButton({ color, onClick }) {
  return <button style={{ backgroundColor: color }} onClick={onClick}>{color}</button>;
}

export default App;

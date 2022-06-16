import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [boxStyle, setBoxStyle] = useState({
    width: 5,
    height: 5,
    br: 4,
    bc: "red",
  });
  const updateField = (field, value) =>
    setBoxStyle({
      ...boxStyle,
      [field]: value,
    });

  const rand = () => Math.floor(Math.random() * 256);

  useEffect(() => {
    updateField("bc", `rgba(${rand()}, ${rand()}, ${rand()})`);
  }, []);

  return (
    <div className="App">
      <div
        className="box"
        style={{
          width: boxStyle.width + "rem",
          height: boxStyle.height + "rem",
          border: `solid 2px ${boxStyle.bc}`,
          borderRadius: boxStyle.br + "px",
        }}
      ></div>
      <input
        type="number"
        onChange={(e) => updateField("width", e.target.value)}
        value={boxStyle.width}
        placeholder="width"
      />
      <input
        type="number"
        onChange={(e) => updateField("height", e.target.value)}
        value={boxStyle.height}
        placeholder="height"
      />
      <input
        type="number"
        placeholder="border-radius"
        onChange={(e) => updateField("br", e.target.value)}
        value={boxStyle.br}
      />
      <input
        type="text"
        onChange={(e) => updateField("bc", e.target.value)}
        value={boxStyle.bc}
        placeholder="border"
      />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";

const Home = () => {
  const [lights, setLights] = useState([
    { id: 0, color: "red" },
    { id: 1, color: "yellow" },
    { id: 2, color: "green" },
  ]);
  const [activeLight, setActiveLight] = useState(null);

  const colorOptions = ["purple", "brown", "white", "blue", "orange"];

  const changeLight = () => {
    const randomIndex = Math.floor(Math.random() * lights.length);
    setActiveLight(lights[randomIndex].id);
  };

  useEffect(() => {
    const interval = setInterval(changeLight, 3000);
    return () => clearInterval(interval);
  }, [lights]);

  const addRandomLight = () => {
    const newColor =
      colorOptions[Math.floor(Math.random() * colorOptions.length)];
    const newLight = { id: lights.length, color: newColor };
    setLights([...lights, newLight]);
  };

  return (
    <div className="d-flex flex-column align-items-center mt-4">
      <div id="sujecion" ></div>

      <div id="card" style={{ height: `${150 + lights.length * 50}px` }}>
        {lights.map((light) => (
          <div
            key={light.id}
            className={`light ${light.color} ${
              activeLight === light.id ? "glow" : ""
            }`}
            onClick={() => setActiveLight(light.id)}
          ></div>
        ))}
      </div>

      <button className="btn btn-primary mt-3" onClick={changeLight}>
        Cambiar Luz Aleatoriamente
      </button>
      <button className="btn btn-success mt-3" onClick={addRandomLight}>
        Añadir Nuevo Color
      </button>
    </div>
  );
};


export default Home;

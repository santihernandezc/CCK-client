import React, { useEffect, useState } from "react";
import "./App.css";

import Evento from "./components/Evento/Evento";

function App() {
  let [eventos, setEventos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000")
      .then(data => data.json())
      .then(eventos => setEventos(eventos));
  }, []);
  return (
    <>
      <div>App!!!</div>
      <div>Eventos:</div>
      {eventos.map((evento, i) => (
        <Evento evento={evento} key={i} />
      ))}
    </>
  );
}

export default App;

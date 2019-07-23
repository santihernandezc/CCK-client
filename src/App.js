import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";

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
      <Header />
      <section className="App">
        <h2>Eventos:</h2>
        {eventos.map((evento, i) => (
          <Evento evento={evento} key={i} />
        ))}
      </section>
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./App.scss";
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
      <main className="App">
        <article className="eventos">
          {eventos.map((evento, i) => (
            <Evento evento={evento} key={i} />
          ))}
        </article>
      </main>
    </>
  );
}

export default App;

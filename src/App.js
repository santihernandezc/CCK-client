import React, { useEffect, useState } from "react";
import "./App.scss";
import Home from "./containers/Home/Home";
import Header from "./components/Header/Header";

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
      <Home eventos={eventos} />
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./App.scss";
import Home from "./containers/Home/Home";
import Header from "./components/Header/Header";

function App() {
  let API = "";
  process.env.REACT_APP_STAGE === "dev"
    ? (API = "http://localhost:5000/")
    : (API = "https://cck-server.herokuapp.com/");
  let [eventos, setEventos] = useState([]);
  useEffect(() => {
    fetch(API)
      .then(data => data.json())
      .then(eventos => setEventos(eventos));
  }, [API]);
  return (
    <>
      <Header />
      <Home eventos={eventos} />
    </>
  );
}

export default App;

import React from "react";
import "./Home.scss";
import Eventos from "../Eventos/Eventos";

const Home = () => {
  return (
    <>
      <main className="Home">
        <h1>Nuevos Eventos</h1>
        <Eventos />
      </main>
    </>
  );
};

export default Home;

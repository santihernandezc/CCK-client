import React from "react";
import "./Home.scss";
import Eventos from "../Eventos/Eventos";

const Home = ({ eventos }) => {
  return (
    <>
      <main className="Home">
        <h1>Nuevos Eventos</h1>
        <Eventos eventos={eventos} />
      </main>
    </>
  );
};

export default Home;

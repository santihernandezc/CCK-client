import React, { useState } from "react";
import "./Eventos.scss";

import Evento from "../../components/Evento/Evento";
import Modal from "../../components/Modal/Modal";

const Eventos = ({ eventos }) => {
  let API = "";
  process.env.REACT_APP_STAGE === "dev"
    ? (API = "http://localhost:5000/")
    : (API = "https://cck-server.herokuapp.com/");
  let [modalOpen, setModalOpen] = useState(false);
  let [eventoSeleccionado, setEventoSeleccionado] = useState({});
  let [isFetching, setIsFetching] = useState(false);

  const handleModalClick = () => {
    setModalOpen(false);
  };

  const handleEventClick = evento => {
    setModalOpen(true);
    setEventoSeleccionado(evento);
  };

  const handleConfirm = ({ nombre, fecha, id, entrada }) => {
    let dataEvento = { nombre, fecha, id };
    console.log(dataEvento);
    let accion = "";
    switch (entrada) {
      case "Paga":
        accion = "comprar";
        break;
      case "Gratis":
        accion = "reservar";
        break;
      case "Próximamente":
        accion = "agendar";
        break;
      default:
        break;
    }
    console.log(accion);
    setIsFetching(true);
    fetch(API + accion, {
      method: "POST",
      body: JSON.stringify(dataEvento),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => {
        console.log("Bien!:", response);
        setIsFetching(false);
      })
      .catch(error => {
        console.error("Error:", error);
        setIsFetching(false);
      });
  };

  return (
    <article className="Eventos">
      {eventos.map((evento, i) => (
        <Evento
          evento={{ ...evento, id: i }}
          key={i}
          handleButtonClick={handleEventClick}
        />
      ))}
      <Modal
        open={modalOpen}
        closeModal={handleModalClick}
        evento={eventoSeleccionado}
        confirm={handleConfirm}
        fetching={isFetching}
      />
    </article>
  );
};

export default Eventos;

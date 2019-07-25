import React, { useState } from "react";
import "./Eventos.scss";

import Evento from "../../components/Evento/Evento";
import Modal from "../../components/Modal/Modal";

const Eventos = ({ eventos }) => {
  let [modalOpen, setModalOpen] = useState(false);
  let [eventoSeleccionado, setEventoSeleccionado] = useState({});

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
    fetch(`http://localhost:5000/${accion}`, {
      method: "POST",
      body: JSON.stringify(dataEvento),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => console.log("Bien!:", response))
      .catch(error => console.error("Error:", error));
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
      />
    </article>
  );
};

export default Eventos;

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
    console.log(evento);
    setModalOpen(true);
    setEventoSeleccionado(evento);
  };

  const handleConfirm = ({ nombre, fecha, id }) => {
    let dataEvento = { nombre, fecha, id };
    console.log(dataEvento);
    fetch("http://localhost:5000", {
      method: "POST",
      body: JSON.stringify(dataEvento),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response));
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

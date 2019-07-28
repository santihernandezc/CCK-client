import React, { useState, useEffect } from "react";
import "./Eventos.scss";

import Evento from "../../components/Evento/Evento";
import Modal from "../../components/Modal/Modal";
import Loader from "../../components/Loader/Loader";

const Eventos = () => {
  let API = "https://cck-server.herokuapp.com/";
  // let API = "http://localhost:5000/";
  let [eventos, setEventos] = useState([]);
  let [modalOpen, setModalOpen] = useState(false);
  let [eventoSeleccionado, setEventoSeleccionado] = useState({});
  let [isFetching, setIsFetching] = useState(true);
  let [isSendingRequest, setIsSendingRequest] = useState(false);

  // Fetch Eventos
  useEffect(() => {
    fetch(API)
      .then(data => data.json())
      .then(eventos => {
        setEventos(eventos);
        setIsFetching(false);
      });
  }, [API]);

  const handleModalClick = () => {
    setModalOpen(false);
  };

  const handleEventClick = evento => {
    setModalOpen(true);
    setEventoSeleccionado(evento);
  };

  const handleConfirm = ({ nombre, fecha, id, accion }) => {
    let dataEvento = { nombre, fecha, id };

    setIsSendingRequest(true);
    fetch(API + accion, {
      method: "POST",
      body: JSON.stringify({ evento: dataEvento }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => {
        setIsSendingRequest(false);
        let nuevoArrEventos = eventos.map(evento => {
          return evento.nombre === response.evento.nombre &&
            evento.fecha === response.evento.fecha
            ? { ...evento, estado: response.evento.estado }
            : evento;
        });
        setEventos(nuevoArrEventos);
        setEventoSeleccionado({
          ...eventoSeleccionado,
          estado: response.evento.estado
        });
      })
      .catch(error => {
        console.error("Error:", error);
        setIsSendingRequest(false);
      });
  };
  return (
    <article className="Eventos">
      {isFetching ? (
        <div className="div-loader">
          <Loader />
        </div>
      ) : (
        eventos.map((evento, i) => (
          <Evento
            evento={{ ...evento, id: i }}
            key={i}
            handleButtonClick={handleEventClick}
          />
        ))
      )}
      <Modal
        open={modalOpen}
        closeModal={handleModalClick}
        evento={eventoSeleccionado}
        confirm={handleConfirm}
        sendingRequest={isSendingRequest}
      />
    </article>
  );
};

export default Eventos;

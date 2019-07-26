import React from "react";
import "./Modal.scss";

import Loader from "../Loader/Loader";

const Modal = ({ open, closeModal, evento, confirm, sendingRequest }) => {
  let accion = "";
  switch (evento.entrada) {
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
  const handleConfirmClick = () => {
    let payload = {
      ...evento,
      accion
    };
    confirm(payload);
  };
  const renderButton = () => {
    console.log(evento.estado);
    return evento.estado ? (
      <button className="btn reservado" onClick={handleConfirmClick}>
        {evento.estado}
      </button>
    ) : (
      <button className="btn" onClick={handleConfirmClick}>
        {accion}
      </button>
    );
  };
  return (
    <div className={`backdrop ${open ? "open" : ""}`} onClick={closeModal}>
      <article className="Modal" onClick={e => e.stopPropagation()}>
        <h2>{evento.nombre}</h2>
        <img src={evento.imagen} alt={evento.titulo} />
        <p>{evento.fecha}</p>

        {sendingRequest ? <Loader /> : renderButton()}
      </article>
    </div>
  );
};

export default Modal;

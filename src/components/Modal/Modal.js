import React from "react";
import "./Modal.scss";

import Loader from "../Loader/Loader";

const Modal = ({ open, closeModal, evento, confirm, fetching }) => {
  const handleConfirmClick = () => {
    let payload = {
      ...evento
    };
    confirm(payload);
  };
  return (
    <div className={`backdrop ${open ? "open" : ""}`} onClick={closeModal}>
      <article className="Modal" onClick={e => e.stopPropagation()}>
        <h2>{evento.nombre}</h2>
        <img src={evento.imagen} alt={evento.titulo} />
        <p>{evento.fecha}</p>

        {fetching ? (
          <Loader />
        ) : (
          <button className="btn" onClick={handleConfirmClick}>
            Confirmar
          </button>
        )}
      </article>
    </div>
  );
};

export default Modal;

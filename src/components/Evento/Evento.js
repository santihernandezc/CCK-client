import React from "react";

const Evento = ({ evento }) => {
  return (
    <div>
      <h2>{evento.nombre}</h2>
      <em>{evento.fecha}</em>
      <ul>
        <li>Fecha: {evento.fecha}</li>
        <li>Entrada: {evento.entrada}</li>
      </ul>
    </div>
  );
};

export default Evento;

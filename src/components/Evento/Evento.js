import React from "react";
import "./Evento.scss";

const Evento = ({ evento }) => {
  const renderButton = () => {
    switch (evento.entrada) {
      case "Paga":
        return <button className="btn">Comprar</button>;
      case "Gratis":
        return <button className="btn">Reservar</button>;
      default:
        break;
    }
  };
  return (
    <article className="Evento">
      <div className="imagen">
        <img src={evento.imagen} alt={evento.nombre} />
      </div>
      <div className="detalles">
        <h2>{evento.nombre}</h2>
        <em>{evento.fecha}</em>
        <ul>
          <li>
            Entrada: <span className={evento.entrada}>{evento.entrada}</span>
          </li>
        </ul>
        <div className="botones">
          <a
            href={evento.href}
            rel="noopener noreferrer"
            target="_blank"
            className="btn"
          >
            Ver más
          </a>
          {renderButton()}
        </div>
      </div>
    </article>
  );
};

export default Evento;

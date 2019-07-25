import React from "react";
import "./Evento.scss";

const Evento = ({ evento, handleButtonClick }) => {
  const renderButton = () => {
    if (evento.reservado) {
      return <button className="btn reservado">Reservado</button>;
    }
    switch (evento.entrada) {
      case "Paga":
        return (
          <button className="btn" onClick={() => handleButtonClick(evento)}>
            Comprar
          </button>
        );
      case "Gratis":
        return (
          <button className="btn" onClick={() => handleButtonClick(evento)}>
            Reservar
          </button>
        );
      case "Próximamente":
        return (
          <button className="btn" onClick={() => handleButtonClick(evento)}>
            Guardar reserva
          </button>
        );
      default:
        break;
    }
  };

  console.log("render!");
  return (
    <article className="Evento">
      <div className="imagen">
        <img src={evento.imagen} alt={evento.nombre} />
      </div>
      <div className="detalles">
        <h2>{evento.nombre}</h2>
        <p className="fecha-lugar">{evento.fecha}</p>

        <p>
          Entrada: <span className={evento.entrada}>{evento.entrada}</span>
        </p>

        <div className="botones">
          {renderButton()}
          <a
            href={evento.href}
            rel="noopener noreferrer"
            target="_blank"
            className="btn"
          >
            Ver más
          </a>
        </div>
      </div>
    </article>
  );
};
const compare = (prevProps, nextProps) => {
  return prevProps.evento.reservado === nextProps.evento.reservado;
};
export default React.memo(Evento, compare);

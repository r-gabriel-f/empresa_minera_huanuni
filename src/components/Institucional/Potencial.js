import React from "react";
import res from "../../assets/img/reservas.jpg";
import "../Start.css";
import Interests from "../Interests";
import '../../components/Institucional/Potencial.css';


export const Potencial = () => {
  return (
    <div className="start-container">
      <div className="primery-container">
        <div className="section-one">
          <div>
            <h4>INSTITUCIONAL</h4>
          </div>
          <div>
            <h5>POTENCIAL MINERALOGICO</h5>
            <p>Vida Util de la Mina</p>
            <div className="container-img">
              <img src={res} href id="res" />
            </div>

            <p>
              Las reservas positivas y probables accesibles e inaccesibles
              alcanzan a 7,597,516 Ton para una vida útil de 8,44 años.
              Incluyendo recursos la vida útil será de 17.52 años.
            </p>
          </div>
        </div>
      </div>
      <div className="secundary-container">
        <Interests></Interests>
      </div>
    </div>
  );
};

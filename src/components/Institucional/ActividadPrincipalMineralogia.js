import React from "react";
import azul from "../../assets/img/19.jpg";
import are from "../../assets/img/21.jpg";

import '../Start.css';
import '../../components/Institucional/ActividadPrincipalMineralogia.css';
import Interests from "../Interests";


export const ActividadPrincipalMineralogia = () => {
  return (
    <div className="start-container">
      <div className="primery-container">
        <div className="section-one">
          <div>
            <h4>INSTITUCIONAL</h4>
          </div>
          <div>
            <h5>ACTIVIDAD PRINCIPAL MINERALOGICA</h5>
            <div className="container-img">
              <img src={azul} href id="imgazul" />
            </div>
            <p>
              1. La Empresa Minera Huanuni explota y concentra mineral de estaño
              de alta y baja ley. Comercializados a Vinto y OMSA.
            </p>
            <p>
              2. Se tiene proyectado para la gestion 2015 la explotacion y
              concentracion de minerales complejos .
            </p>
            <div className="container-img">
              <img src={are} href id="imgarena" />
            </div>
          </div>
        </div>
      </div>
      <div className="secundary-container">
        <Interests></Interests>
      </div>
    </div>
  );
};

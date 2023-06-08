import React from "react";
import { Interests } from "../Interests";

import pro1 from "../../assets/img/proy2.jpg";
import pro2 from "../../assets/img/proy1.jpg";
import "../Start.css";
import '../../components/Proyectos/Profundizacio.css';


export const Profundizacio = () => {
  return (
    <div className="start-container">
      <div className="primery-container">
        <div className="section-one">
          <div>
            <h4>PROYECTOS</h4>
          </div>
          <div>
            <h5>PROFUNDIZACIÓN RAMPA PRINCIPAL</h5>
            <p>
              Presupuesto total Bs.34.510.478.19 Adjudicado: Empresa T&T
              Bs.31,285,511,89
            </p>
            <div className="container-img">
              <img src={pro1} href id="pro1" />
            </div>

            <p>
              Construcción desde niv-320 a -480 Longitud: 1714 m, Sección: 5x5m
              Tiempo de ejecución 378 días.
            </p>
          </div>
          <div className="container-img">
            <img src={pro2} href id="pro2" />
          </div>
        </div>
      </div>
      <div className="secundary-container">
        <Interests></Interests>
      </div>
    </div>
  );
};

import React from "react";
import "../Start.css";
import Interests from "../Interests";
import transfe from "../../assets/img/transparencia.jpg";
import '../Tranfe.css';
export const Poa = () => {
  return (
    <div className="start-container">
      <div className="primery-container">
        <div className="section-one">
          <div>
            <h4>TRANSPARENCIA</h4>
          </div>
          <div className="container-img">
            <img src={transfe} href id="transfe" />
          </div>
          <div>
            <h5>POA</h5>
            <ul>
              <li>
                <a href="https://emhuanuni.gob.bo/images/poa.pdf" target="_blank">
                  Descargar Proyecto Gestion 2015
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5>NOMINA PERSONAL</h5>
            <ul>
              <li>
                <a href="https://emhuanuni.gob.bo/images/planilla.pdf" target="_blank">
                  Descargar Nomina de Personal Tecnicos
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5>ESCALA SALARIAL</h5>
            <ul>
              <li>
                <a href="https://emhuanuni.gob.bo/images/salarial.pdf" target="_blank">
                  Descargar Escala Salarial
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="secundary-container">
        <Interests></Interests>
      </div>
    </div>
  );
};

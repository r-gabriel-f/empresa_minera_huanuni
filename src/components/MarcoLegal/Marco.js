import React from 'react'
import "../Start.css";
import Interests from '../Interests';
import transfe from "../../assets/img/transparencia.jpg";
import '../Tranfe.css';

export const Marco = () => {
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
            <h5>LEYES</h5>
            <ul>
              <li>
                <a href="https://emhuanuni.gob.bo/images/Ley1.pdf" target="_blank">
                  Descargar Ley de Medio Ambiente
                </a>
              </li>
              <li>
                <a href="https://emhuanuni.gob.bo/images/LeyMinera.pdf" target="_blank">
                  Descargar Ley Minera Nro 535
                </a>
              </li>
              <li>
                <a href="https://emhuanuni.gob.bo/images/ley466.pdf" target="_blank">
                  Descargar Ley de Empresa Publicas Nro 466
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5>DECRETOS</h5>
            <ul>
              <li>
                <a href="https://emhuanuni.gob.bo/images/DS-28901.pdf" target="_blank">
                  Descargar Decreto Supremo Nro 28901
                </a>
              </li>
              <li>
                <a href="https://emhuanuni.gob.bo/images/DS-29459.pdf" target="_blank">
                  Descargar Decreto Supremo Nro 28901
                </a>
              </li>
              <li>
                <a href="https://emhuanuni.gob.bo/images/DS181.pdf" target="_blank">
                  Descargar Decreto Supremo Nro 0181
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5>REGLAMENTOS</h5>
            <ul>
              <li>
                <a href="https://emhuanuni.gob.bo/images/REGLAMENTO1.pdf" target="_blank">
                  Descargar Reglamento de Ley Ganeral del Trabajo
                </a>
              </li>
              <li>
                <a href="https://emhuanuni.gob.bo/images/REGLAMENTO2.pdf" target="_blank">
                  Descargar Reglamento Ambiental Actividades Mineras
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
  )
}

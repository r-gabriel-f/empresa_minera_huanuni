import React from "react";
import jf from "../../assets/img/GERENTE.jpg";
import '../Start.css'
import '../../components/Institucional/MisionVision.css';
import { Interests } from "../Interests";
export const MisionVision = () => {
  return (
    
      <div className="start-container">
        <div className="primery-container">
          <div className="section-one">
            <div>
              <h4>INSTITUCIONAL</h4>
            </div>
            <div>
              <h5>MISION</h5>
              <p>
                Desarrollar una producción sostenible para contribuir al
                crecimiento de nuestra Empresa Minera generando utilidades como
                aporte a la región al departamento y al Estado Plurinacional de
                Bolivia, con una mejora continua a todo nivel.
              </p>
              <div className="container-img">
                <img src={jf} href id="ge" />
              </div>
              <h5>VISION</h5>
              <p>
                Ser una Empresa líder en la producción de concentrados de Estaño
                (Sn) y estar valorados por nuestro aporte al crecimiento del
                Estado Plurinacional de Bolivia.
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

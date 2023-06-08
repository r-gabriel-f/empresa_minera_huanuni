import React from "react";
import ub1 from "../../assets/img/Ubicacion.jpg";
import ub2 from "../../assets/img/ubicacion2.jpg";
import '../Start.css'
import { Interests } from "../Interests";
import '../../components/Institucional/HubicacionGeograica.css';


export const HubicacionGeograica = () => {
  return (
    <div className="start-container">
      <div className="primery-container">
        <div className="section-one">
          <div>
            <h4>INSTITUCIONAL</h4>
          </div>
          <div>
            <h5>UBICACION</h5>
            <div className="container-img">
              <img src={ub1} href id="ub1" />
            </div>
            <p>
              La población minera de Huanuni, también conocida como Villa
              Huanuni, es la capital de la Primera Sección Municipal de la
              Provincia Pantaleón Dalence del Departamento de Oruro. Se
              encuentra ubicada al Sudeste de la ciudad de Oruro, a 42 Km. de
              carretera asfaltada.
            </p>
            <p>
              Huanuni, se encuentra aproximadamente entre las coordenadas 66°
              45´ de Longitud Este y 18° 15' de Latitud Sud.
            </p>
            <div className="container-img">
              <img src={ub2} href id="ub2" />
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

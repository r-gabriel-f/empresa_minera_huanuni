import React from "react";
import ub1 from "../../assets/img/Ubicacion.jpg";
import ub2 from "../../assets/img/ubicacion2.jpg";
export const HubicacionGeograica = () => {
  return (
    <div className="start-container-1">
      <div className="primery-container-1">
        <div className="section-one-1">
          <div>
            <h4>INSTITUCIONAL</h4>
          </div>
          <div>
            <h5>UBICACION</h5>
            <div className="container-img-jf">
              <img src={ub1} href id="ub1" />
            </div>
            <P>
              La población minera de Huanuni, también conocida como Villa
              Huanuni, es la capital de la Primera Sección Municipal de la
              Provincia Pantaleón Dalence del Departamento de Oruro. Se
              encuentra ubicada al Sudeste de la ciudad de Oruro, a 42 Km. de
              carretera asfaltada.
            </P>
            <p>
              Huanuni, se encuentra aproximadamente entre las coordenadas 66°
              45´ de Longitud Este y 18° 15' de Latitud Sud.
            </p>
            <div className="container-img-jf">
              <img src={ub2} href id="ub2" />
            </div>
          </div>
        </div>
      </div>
      <div className="secundary-container-1">
        <Interests></Interests>
      </div>
    </div>
  );
};

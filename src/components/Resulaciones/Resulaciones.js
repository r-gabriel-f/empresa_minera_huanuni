import React from "react";
import { Interests } from "../Interests";
import transfe from "../../assets/img/transparencia.jpg";
export const Resulaciones = () => {
  return (
    <div className="start-container">
      <div className="primery-container">
        <div className="section-one">
          <div>
            <h4>RESULUCIONES</h4>
          </div>
          <div className="container-img">
            <img src={transfe} href id="transfe" />
          </div>
          <div>
            <ul>
              <li>Descargar Resulucion Ministerial Nro 018/2017</li>
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

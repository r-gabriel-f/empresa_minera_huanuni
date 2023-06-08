import React from "react";
import Interests from "../Interests";
import ra1 from "../../assets/img/ra1.jpg";
import ra2 from "../../assets/img/ra2.jpg";
import "../Start.css";
import '../../components/Proyectos/Contruccion.css';



export const Contruccion = () => {
  return (
    <div className="start-container">
      <div className="primery-container">
        <div className="section-one">
          <div>
            <h4>PROYECTOS</h4>
          </div>
          <div>
            <h5>RAISE BORING</h5>
            <div className="container-img">
              <img src={ra1} href id="ra1" />
            </div>
            <div className="container-img">
              <img src={ra2} href id="ra2" />
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

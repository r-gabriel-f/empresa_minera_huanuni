import React from "react";
import dis1 from "../../assets/img/disque1.jpg";
import dis2 from "../../assets/img/disque2.jpg";
import "../Start.css";
import { Interests } from "../Interests";
import '../../components/Proyectos/Dique.css';

export const Dique = () => {
  return (
    <div className="start-container">
      <div className="primery-container">
        <div className="section-one">
          <div>
            <h4>PROYECTOS</h4>
          </div>
          <div>
            <h5>DIQUE DE COLAS WILLA KHOLLU</h5>

            <div className="container-img">
              <img src={dis1} href id="dis1" />
         
            </div>
            <div className="container-img">
             
              <img src={dis2} href id="dis2" />
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

import React from 'react'
import ban from "../../assets/img/baner produccion.jpg";
import pro from "../../assets/img/produccion 2018.jpg";
import '../Start.css'
import { Interests } from '../Interests';

export const ResumenTecnico = () => {
  return (
    <div className="start-container">
    <div className="primery-container">
      <div className="section-one">
        <div>
          <h4>INSTITUCIONAL</h4>
        </div>
        <div>
          <h5>RESUMEN TECNICO</h5>
          
          <div className="container-img">
            <img src={ban} href id="ban" />
          </div>
          <div className="container-img">
            <img src={pro} href id="pro" />
          </div>

          
        </div>
      </div>
    </div>
    <div className="secundary-container">
      <Interests></Interests>
    </div>
  </div>
  )
}

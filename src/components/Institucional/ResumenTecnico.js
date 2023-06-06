import React from 'react'
import ban from "../../assets/img/baner produccion.jpg";
import pro from "../../assets/img/produccion 2018.jpg";

export const ResumenTecnico = () => {
  return (
    <div className="start-container-1">
    <div className="primery-container-1">
      <div className="section-one-1">
        <div>
          <h4>INSTITUCIONAL</h4>
        </div>
        <div>
          <h5>RESUMEN TECNICO</h5>
          
          <div className="container-img-jf">
            <img src={ban} href id="ban" />
          </div>
          <div className="container-img-jf">
            <img src={pro} href id="pro" />
          </div>

          
        </div>
      </div>
    </div>
    <div className="secundary-container-1">
      <Interests></Interests>
    </div>
  </div>
  )
}

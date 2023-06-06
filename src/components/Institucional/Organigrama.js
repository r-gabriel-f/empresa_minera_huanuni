import React from 'react'
import on from "../../assets/img/OrgNuevo.jpg";
import op from "../../assets/img/org-personal.jpg";
export const Organigrama = () => {
  return (
    <div className="start-container-1">
      <div className="primery-container-1">
        <div className="section-one-1">
          <div>
            <h4>INSTITUCIONAL</h4>
          </div>
          <div>
            <h5>ORGANIGRAMA</h5>
            <div className="container-img-jf">
              <img src={on} href id="on" />
            </div>
            
            <div className="container-img-jf">
              <img src={op} href id="op" />
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

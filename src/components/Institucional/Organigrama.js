import React from 'react'
import on from "../../assets/img/OrgNuevo.jpg";
import op from "../../assets/img/org-personal.jpg";
import '../Start.css';
import '../../components/Institucional/Organigrama.css';

import { Interests } from '../Interests';

export const Organigrama = () => {
  return (
    <div className="start-container">
      <div className="primery-container">
        <div className="section-one">
          <div>
            <h4>INSTITUCIONAL</h4>
          </div>
          <div>
            <h5>ORGANIGRAMA</h5>
            <div className="container-img">
              <img src={on} href id="on" />
            </div>
            
            <div className="container-img">
              <img src={op} href id="op" />
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

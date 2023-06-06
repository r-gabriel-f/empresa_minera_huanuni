import React from "react";
import jf from '../../assets/img/54a33e7f98f63.jpg'
import { Interests } from "../Interests";
import '../Start.css';
import "./Pages1.css"
export const Pages1 = () => {
  return (
    <div className="start-container">
      <div className="primery-container">
        <div className="section-one">
          <div>
            <h4>INICIO</h4>
          </div>
          <div>
            <h5>COMIBOL TIENE EN MENTE 11 PROYECTOS MINEROS ESTE 2015</h5>
            <div className="container-img">
              <img src={jf} href id="imjf" />
            </div>

            <p>
              En su plan 2015-2020 ha inscrito a 3 empresas, pero hará
              prospección y exploración en 4 regiones
            </p>
            <p>
              “Para la gestión 2015-2020, la Corporación Minera de Bolivia
              (Comibol) abrirá tres empresas mineras, que son Mallku Kota
              (Potosí), Thutu (Potosí) y Concordia (La Paz). Estas empresas
              están en la etapa de prospección con resultados muy alentadores y
              pasarán a la etapa de exploración”, declaró el presidente de la
              entidad, Marcelino Quispe.
            </p>
            <p>
              Pero además, estarán los proyectos minerales en el cerro Yanacachi
              (Oruro) de cuarzo, con impregnaciones de minerales de casiterita;
              y en el Cerro Pakokahua-Negrillos, en Sabaya, frontera con Chile.
              En Potosí está el yacimiento de zinc de Pampa Grande.
            </p>
            <p>
              Comibol pretende invertir Bs 64 millones en la primera etapa y el
              Plan Quinquenal tiene presupuestado Bs 350 millones. De acuerdo a
              los logros, el presupuesto se incrementará.
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

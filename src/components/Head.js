import React from "react";
import "../components/Head.css";

import bolivia from "../assets/img/escudo-bolivia.png";
import comibol from "../assets/img/Huanuni_Blanco.png";



export const Head = () => {
  return (
    <div className="container-head">
      <div className="head">
        <div className="head-bolivia">
          <img src={bolivia} href />
        </div>
        <div className="head-nombre">
          <h1>EMPRESA MINERA HUANUNI</h1>
          <h3>CORPORACION MINERA DE BOLIVIA</h3>
        </div>
        <div className="head-comibol">
          <img src={comibol} href />
        </div>
      </div>
      
    </div>
  );
};

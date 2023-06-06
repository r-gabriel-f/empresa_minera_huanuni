import React from "react";
import res from "../../assets/img/reservas.jpg";

export const PotencialMinerologia = () => {
  <div className="start-container-1">
    <div className="primery-container-1">
      <div className="section-one-1">
        <div>
          <h4>INSTITUCIONAL</h4>
        </div>
        <div>
          <h5>POTENCIAL MINERALOGICO</h5>
          <p>Vida Util de la Mina</p>
          <div className="container-img-jf">
            <img src={res} href id="res" />
          </div>

          <p>
            Las reservas positivas y probables accesibles e inaccesibles
            alcanzan a 7,597,516 Ton para una vida útil de 8,44 años. Incluyendo
            recursos la vida útil será de 17.52 años.
          </p>
        </div>
      </div>
    </div>
    <div className="secundary-container-1">
      <Interests></Interests>
    </div>
  </div>;
};

import React from "react";
import bol from "../assets/img/DSC_0061.jpg";
import boli from "../assets/img/nuevoingenio1.jpg";

import { Interests } from "./Interests";
import "../components/Start.css";
import { useNavigate } from "react-router-dom";

export const Start = () => {
  const navigate = useNavigate();

  const handleLiClick = () => {
    navigate("/inicio/pages1");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleLiClick2 = () => {
    navigate("/inicio/pages2");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleLiClick3 = () => {
    navigate("/inicio/pages3");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="start-container">
      <div className="primery-container">
        <div className="section-one">
          <div>
            <h4>INICIO</h4>
          </div>
          <div>
            <h5>GOBIERNO INVERTIRÁ $US 15 MILLONES PARA SALVAR HUANUNI</h5>
            <div className="container-img">
              <img src={bol} href id="im1" />
            </div>

            <p>
              El ministro de Minería y Metalurgia, César Navarro, informó a
              Erbol que el gobierno invertirá $us 15 millones para que la
              Empresa Minera Huanuni (EMH) no se cierre y enfrente debidamente
              la baja cotización del estaño en el mercado internacional.
            </p>
            <p>
              La autoridad explicó que se invertirá en la compra de equipos y
              maquinaría, además de desarrollar trabajos en nuevas aéreas
              productivas. Existe la intención de procesar entre 800 y 850
              toneladas por mes, la maquinaria llegaría en abril de este año.
            </p>
            <p>
              “Hoy se está planteando nuevas áreas de trabajo, además habilitar
              la última rampla que nos permita ingresar hasta los niveles
              inferiores y extraer la carga directamente al ingenio de
              Lucianita”, dijo.
            </p>
            <p>
              La producción de estaño será distribuida en tres ingenios que
              fueron puestos en óptimas condiciones. El 2016 ingresará en
              funcionamiento el nuevo ingenio de Lucianita, explicó Navarro.
            </p>
            <p>
              El nuevo ingenio de Lucianita trabajará desde enero de 2016 y
              procesará alrededor de 3 mil toneladas de estaño día que serán
              extraídas de nuevas áreas de producción.
            </p>
            <p>
              “Por esa cantidad de producción depende sustantivamente de la
              ampliación de producción que tenga Huanuni, estamos hablando de
              una cadena productiva, el rol de Huanuni es importante y
              sustantivo”, enfatizó, la autoridad Estatal....
            </p>
          </div>
          <div>
            <h5>INGENIO DUPLICARÁ EL TRATAMIENTO DE MINERALES EN HUANUNI</h5>
            <div className="container-img">
              <img src={boli} href id="im2" />
            </div>

            <p>
              El presidente Evo Morales inauguró este miércoles la planta de
              concentración de estaño Lucianita. Este emprendimiento requirió
              una inversión de 50 millones de dólares y tiene previsto duplicar
              la capacidad de tratamiento de minerales de la empresa minera
              Huanuni en el departamento de Oruro.
            </p>
            <p>
              Morales aseguró que los recursos para la construcción de
              Lucianitaprovienen del Tesoro General del Estado (TGN). En ese
              sentido pidió a los mineros un compromiso y responsabilidad para
              generar divisas que beneficien al pueblo boliviano.
            </p>
            <p>
              “Hay que ver cómo garantizar las inversiones en Bolivia,
              quisiéramos que construcciones como estas queden en manos de
              empresarios bolivianos, pero los empresarios privados quedan
              enanos frente a los requerimientos del Gobierno”, reflexionó el
              mandatario.
            </p>
            <p>Huanuni tendrá $us 22 millones en ganancias </p>
          </div>
          <div>
            <h5>Más Artículos...</h5>
            <ol>
              <li onClick={handleLiClick}>
                Comibol tiene en mente 11 proyectos mineros este 2015
              </li>
              <li onClick={handleLiClick2}>
                Víctor Montoya EL GOLPE SANGRIENTO DE TODOS SANTOS
              </li>
              <li onClick={handleLiClick3}>
                LA NACIONALIZACIÓN SE DEBE A LA LUCHA DEL PROLETARIADO MINERO
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="secundary-container">
        <Interests></Interests>
      </div>
    </div>
  );
};

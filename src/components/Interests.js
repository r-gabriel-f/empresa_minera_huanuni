import React from "react";
import ReactPlayer from "react-player";
import "../components/Interests.css";
import i1 from "../assets/img/comibol1.jpg";
import i2 from "../assets/img/comibol2.jpg";
import i3 from "../assets/img/comibol3.jpg";
import i4 from "../assets/img/rnh1.jpg";
import i5 from "../assets/img/ministro.jpg";
import ic1 from "../assets/img/twitter.png";
import ic2 from "../assets/img/youtube.png";
import ic3 from "../assets/img/facebook.png";
import bandera from "../assets/img/Bandera_Bolivia.png";
import moneda from "../assets/img/moneda1.jpg";

export const Interests = () => {
  return (
    <div className="interests-container">
      <div className="container-one">
        <div className="one-1">
          <h4>Enlaces Internos</h4>
          <ul id="sep">
            <li>Archivo Historico Nacional Minero</li>
            <li>Centro de Investicacion Minero Metalurgico</li>
            <li>Cerro Rico de Potosi</li>
            <li>Empresa Minera Catavi</li>
            <li>Empresa Minera Colquiri</li>
            <li>Empresa Minera Corocoro</li>
          </ul>
        </div>
        <div className="one-2">
          <h4>Videos Relacionados</h4>
          <ReactPlayer id="sep"
            width={250}
            height={150}
            className="video"
            url="https://www.youtube.com/watch?v=dy__PaAWKPk&t=1s"
            controls
          />
        </div>
        <div className="one-3">
          <h4>Cursos y Talleres</h4>
          <p id="sep">
            El 29 y 30 de Enero de 2015, se realizara el Taller Practico de
            Aplicación de la Guía de Estandarización de Sitios Web
            Gubernamentales, el mismo estará a cargo de la Agencia para el
            Desarrollo de la Sociedad de la Información en Bolivia. El evento se
            llevará acabo en el Auditorium de Archivos de Comibol, ubicado en la
            ciudad de El Alto, lado Fuerza Aerea de 08:30 a 18:00:
          </p>
        </div>
        <div className="one-4">
          <h4>Ultimas Noticias</h4>
          <ul id="sep">
            <li>Pagina 1 - Gestion 2023</li>
            <li>Contrataciones Directas</li>
            <li>Reglamento</li>
          </ul>
        </div>
        <div className="one-5">
          <h4>Aviso Importante</h4>
          <p id="sep">
            Aviso para todo los trabajadores deben presentarse en la empresa a
            partir de 7:00 a.m. el dia lunes 02 de febrero sera de muy vital su
            presencia la Gernecia
          </p>
        </div>
      </div>
      <div className="container-two">
        <div className="two-1">
          <h4>Enlaces Interes</h4>
          <ul id="sep">
            <li>Gestion</li>
            <li>Proyectos Institucionales</li>
            <li>Publicaciones</li>
          </ul>
        </div>
        <div className="two-2">
          <h4>Organizaciones</h4>
          <img src={i1} href id="sep"/>
          <img src={i2} href />
          <img src={i3} href />
          <img src={i4} href id="ban"/>
        </div>
        <div className="two-3">
          <h4>Miniterios</h4>
          <img src={i5} href id="sep"/>
        </div>
        <div className="two-4">
          <h4>Redes Sociales</h4>
          <div className="two-4-img" id="sep">
            <img src={ic1} href />
            <img src={ic2} href />
            <img src={ic3} href />
          </div>
        </div>
        <div className="two-5">
          <h4>Marca Pais</h4>
          <img src={bandera} href id="sep"/>
        </div>
        <div className="two-6">
          <h4>Moneda de Huanuni</h4>
          <img src={moneda} href id="sep"/>
        </div>
      </div>
    </div>
  );
};

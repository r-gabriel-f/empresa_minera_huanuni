import React from "react";
import n from "../../assets/img/nacion.jpeg";
import Interests from "../Interests";
import '../Start.css';
import "./Pages3.css";
export const Pages3 = () => {
  return (
    <div className="start-container">
      <div className="primery-container">
        <div className="section-one">
          <div>
            <h4>INICIO</h4>
          </div>
          <div>
            <h5>
              LA NACIONALIZACIÓN SE DEBE A LA LUCHA DEL PROLETARIADO MINERO
            </h5>
            <div className="container-img">
              <img src={n} href id="imn" />
            </div>

            <p>
              La clase obrera no hipotecará su dignidad ni venderá su conciencia
              de clase.
            </p>
            <p>
              Este 31 de Octubre se recuerda una fecha memorable que nace bajo
              el influjo de la tenaz lucha del proletariado minero, indica en
              forma acertada un documento emitido por el Sindicato Mixto de
              Trabajadores Mineros de Huanuni en el cual se evalúa todo el
              proceso de evolución y desarrollo de la nacionalización de las
              minas.
            </p>
            <p>
              Se recuerda que en 1944 en el distrito minero de Huanuni nace la
              FEDERACIÓN SINDICAL DE TRABAJADORES MINEROS DE BOLIVIA,
              institución sindical que marcará con letras indelebles la historia
              del movimiento obrero boliviano, por sus acciones de coraje,
              valentía, lucidez para percibir la historia mediante el análisis
              que nace del instinto de clase.
            </p>
            <p>
              Señalan que como consecuencia de ese proceso nace la TESIS DE
              PULACAYO, instrumento ideológico que encumbrará a la clase obrera
              del país como la lumbrera de los movimientos sociales de América
              Latina.
            </p>
            <p>
              Luego –indican- viene la obscura noche del sexenio, época de
              persecuciones, torturas, masacres y una clase obrera que soporta
              pero no hipoteca su dignidad, su elevada conciencia de clase y
              nunca dice ser víctima, sino un constante conspirador contra la
              tiranía de los Hertzog, Urriolagoitia, Ballivián.
            </p>
            <p>
              conspirador contra la tiranía de los Hertzog, Urriolagoitia,
              Ballivián. Señalan que esa clase obrera hambrienta y explotada,
              con salarios de hambre, hace la Revolución del 9 de abril,
              timoneada por un partido político policlasista, que usurpa las
              consignas obreras, las degenera y traiciona a todo un país.
            </p>
            <p>
              La nacionalización de las minas nace en los campos de María
              Barzola entre Catavi y Siglo Veinte y está inscrita en la
              conciencia de las masas. Sin embargo indican que esta obra
              magistral de la clase obrera se completó con la salida de sus
              entrañas de la entidad minera que regirá los destinos de la
              explotación de los minerales, LA CORPORACIÓN MINERA DE BOLIVIA,
              entidad que después será la mas apetecida por la angurria
              movimientista.
            </p>
            <p>
              Vendrá otra época aún más dañina, las dictaduras militares,
              consigna imperialista que utiliza a los alumnos de la escuela de
              las Américas, siniestra institución que educó para el genocidio,
              el crimen, la tortura, y Bolivia y América del Sur se ven
              envueltos en un manto negro de impunidad.
            </p>
            <p>
              Señalan que el movimiento obrero se vio abatido por varias
              masacres obreras más: Siglo XX, Sora Sora, Huanuni y por último
              veremos la Marcha por la Vida, epopeya escrita en letras de molde
              en la historia del movimiento obrero minero.
            </p>
            <p>
              El proceso de cambio se escribió en las asambleas, ampliados y
              congresos mineros, quisimos una sociedad sin clases, sin
              explotadores ni explotados, nunca más ningún gobierno que destruya
              el aparato productivo, proclamamos el SOCIALISMO, ahí está la meta
              de los explotados, esperamos que así lo comprendan quienes ahora
              por voluntad del pueblo están en el poder, indican.
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

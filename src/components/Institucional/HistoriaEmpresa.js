import React from "react";
import jf from "../../assets/img/HUAN_nevado.jpg";
import '../Start.css'
import { Interests } from "../Interests";
export const HistoriaEmpresa = () => {
  return (
    <div className="start-container">
      <div className="primery-container">
        <div className="section-one">
          <div>
            <h4>INSTITUCIONAL</h4>
          </div>
          <div>
            <h5>HISTORIA DE LA EMPRESA</h5>
            <div className="container-img">
              <img src={jf} href id="nevado" />
            </div>
            <p>
              Huanuni se encuentra a una hora de la ciudad de Oruro en Bolivia ,
              el descubrimiento se remonta a la época colonial, epoca del Virrey
              Francisco de Toledo (1745), el nombre inicial del cerro fue
              Guaricunca, que se cambió por Kcoya Orco (cerro de las minas) y
              finalmente PosoKoni como se conoce actualmente.
            </p>

            <p>
              El que habría descubierto minerales de Estaño y Plata llegando a
              fundirlos sería el español Bernardo Cabrera el año 1745, quien se
              asilo en el lugar denominado "guanani" que significa, he
              escarmentado o padecido, "Huañuchihuankankú", abria sido la
              expresion quechua por un campesino, denominativos que se generaron
              en alusión al intenso frío de la región que podía quebrar la
              rocas. Entonces se estima que de “guanani” proviene el nombre de
              Huanuni.
            </p>
            <p>
              En 1840 el Sr. Tellez se adjudicó varias propiedades mineras, que
              hasta el año 1860 llegó a tener 47 propiedades; en 1883 se forma
              la compañía minera "SOCIEDAD MINERALOGICA TELLEZ HUANUNI",
              teniendo como principal colindante a Harrisón; en 1884 por fusión
              de compañías se crea la empresa "PENNY-DUNCAN", explotando la
              propiedad llamada El Polígono y los yacimiemtos ricos de María
              Francisca, El Porvenir, las propiedades de los cerros Posokoni,
              Viscachani y Chuallani
            </p>
            <p>
              Entre l908 y l9l0, el Industrial minero Simón Patiño compra todas
              las concesiones, conformando un grupo minero que en 1931 pasa a
              integrar la PATIÑO MINES, delegando sus derechos a la BOLIVIAN TIN
              AND TUNGTEN CORPORATION. En el transcurso de 1949, el país es
              convulsionado, políticamente llegando a 1952 y por Decreto de
              Nacionalización de la Minas, Huanuni pasa a formar parte de la
              CORPORACION MINERA DE BOLIVIA.{" "}
            </p>
            <p>
              Desde que Patiño adquirió las ricas minas de la región, a finales
              del siglo XIX, los trabajadores mineros de Huanuni ofrecieron
              resistencia a la explotación inhumana e inmisericorde del patrón.
              En 1919, desde el 13 hasta el 17 de noviembre sostuvieron una
              heroica lucha que culminó con la conquista de las ocho horas de
              trabajo, conquista que posteriormente sería incorporado al derecho
              social boliviano. El 15 de junio de1938 se fundó el Sindicato
              Mixto de Trabajadores Mineros de Huanuni. A finales de septiembre
              de 1940 se produjo un levantamiento de los mineros de Huanuni
              encabezados por la palliri Lola Irahola que tuvo repercusión
              nacional.
            </p>
            <p>
              En 1944, desde el 10 al 13 de junio se realizó en Huanuni el
              Primer Congreso de Trabajadores Mineros de Bolivia, fundándose el
              11 de Junio la poderosa Federación Sindical de Trabajadores
              Mineros de Bolivia (FSTMB)
            </p>
            <p>
              En la década de los 40 se produjeron numerosos levantamientos
              sociales y entre ellos se cuenta la Masacre de Huanuni del 30 de
              mayo de 1949, donde se produjo la caída y detenciones de numerosos
              dirigentes mineros. Posteriormente, los diferentes gobiernos de
              turno repitieron las masacres una y otra vez pretendiendo acallar
              la voz de los mineros de Huanuni llegando a constituirse en la
              vanguardia del movimiento minero boliviano.
            </p>
            <p>
              1952. se da la Nacionalización de las Minas. Pero Patiño, es
              reemplazado por un nuevo patrón, el Estado a través de COMIBOL.
              Los parajes de explotación siguen siendo los mismos que dejaron
              los barones del estaño.
            </p>
            <p>
              1971 – 1978. Durante la dictadura de Banzer, boyó la minería en
              Huanuni especialmente por los altos precios del estaño a nivel
              internacional. En este periodo, se neutralizó a los mineros,
              especialmente de interior mina, con contratos personales que les
              permitía emonumentos salariales por 50 veces más que su salario
              básico. No es casual que Huanuni rompió algunas huelgas de la
              FSTMB. El gobierno de entonces, en boca del ministro de mineria
              Rogelio Miranda decía “con tal que se trabaje en Huanuni, el resto
              puede parar cuanto quiera”
            </p>
            <p>
              En 1987, por el Decreto Supremo 21377, se descentraliza y forma
              parte de la EMPRESA MINERA SUBSIDIARIA DE ORURO como Centro Minero
              Huanuni, posteriormente por disposiciones superiores a finales de
              1,992 nuevamente toma el nombre de Empresa Minera Huanuni,
              dependiendo directamente de las Oficinas Centrales de COMIBOL;
              posteriormente el 9 de Marzo del 2000 se firma el contrato de
              riesgo comprartido con Allied Deals PLC, que posteriormente se
              llamó RBG Minera Huanuni S.A. y por la quiebra de ésta por fraude
              de sus principales ejecutivos la empresa es intervenida
              judicialmente a pedido del gobierno boliviano a través de COMIBOL,
              nuevamente es modificado el nombre de la Empresa; entre Junio del
              2002 a Mayo 2006, la Empresa lleva el nombre de RBG Minera Huanuni
              S.A.-INTERVENCION, a partir del mes de Junio 2006 por disposición
              gubernamental se resuelve el contrato de riesgo compartido y la
              Empresa es nuevamente dependiente de la CORPORACION MINERA DE
              BOLIVIA bajo el denominativo de EMPRESA MINERA HUANUNI.
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

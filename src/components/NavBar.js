import React from "react";
import "../components/NavBar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  //inicio
  const handleInicioClick = () => {
    navigate("/");
  };

  //institucional
  const handleintitucionClickMV = () => {
    navigate("/institucional/mision-vision");
  };
  const handleintitucionClickHE = () => {
    navigate("/institucional/historia-empresa");
  };
  const handleintitucionClickAC = () => {
    navigate("/institucional/actividad-principal-mineralogia");
  };
  const handleintitucionClickOR = () => {
    navigate("/institucional/organigrama");
  };
  const handleintitucionClickHU = () => {
    navigate(
      "/institucional/hubicacion-geografico-infografica-distancia-altitud"
    );
  };
  const handleintitucionClickPO = () => {
    navigate("/institucional/potencial-minerologico");
  };
  const handleintitucionClickRE = () => {
    navigate("/institucional/resumen-tecnico");
  };

  //proyectos
  const handleproyectosClickP = () => {
    navigate("/proyectos/profundizacion-rampa-principal");
  };
  const handleproyectosClickD = () => {
    navigate("/proyectos/dique-de-colas-willa-khollu");
  };
  const handleproyectosClickC = () => {
    navigate("/proyectos/contruccion-chimeneas-de-ventilzacion");
  };

  //transparencia
  const handletransparenciaClick = () => {
    navigate("/transperencia");
  };


  //contrataciones
  const handlebienesClickb1 = () => {
    navigate("/contrataciones/bienes-servicio1");
  };
  const handlebienesClickb2 = () => {
    navigate("/contrataciones/bienes-servicio2");
  };


  //marco legal
  const handlemarcoClick = () => {
    navigate("/marco-legal");
  };

  //resuluciones
  const handleResolucionesClick = () => {
    navigate("/resoluciones");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      style={{ backgroundColor: "#C4C8D3" }}
    >
      <div className="container-fluid" style={{ marginLeft: "10px" }}>
        <a className="navbar-brand" href="#">
          E. M. H.
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ marginTop: "-10px" }}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
                onClick={handleInicioClick}
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Institucional
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/institucional/mision-vision"
                    onClick={handleintitucionClickMV}
                  >
                    Mision y Vision
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/institucional/historia-empresa"
                    onClick={handleintitucionClickHE}
                  >
                    Historia de la Empresa
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/institucional/actividad-principal-mineralogia"
                    onClick={handleintitucionClickAC}
                  >
                    Actividad Principal Mineralogia
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/institucional/organigrama"
                    onClick={handleintitucionClickOR}
                  >
                    Organigrama
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/institucional/hubicacion-geografico-infografica-distancia-altitud"
                    onClick={handleintitucionClickHU}
                  >
                    Hubicacion Geografica-Infografica-Distancia-Altitud
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/institucional/potencial-minerologico"
                    onClick={handleintitucionClickPO}
                  >
                    Potencial Minerologico
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/institucional/resumen-tecnico"
                    onClick={handleintitucionClickRE}
                  >
                    Resumen Tecnico
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Proyectos
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/proyectos/profundizacion-rampa-principal"
                    onClick={handleproyectosClickP}
                  >
                    Profundizacion Rampa Principal
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/proyectos/dique-de-colas-willa-khollu"
                    onClick={handleproyectosClickD}
                  >
                    Dique de Colas Willa Khollu
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/proyectos/contruccion-chimeneas-de-ventilzacion"
                    onClick={handleproyectosClickC}
                  >
                    Contruccion Chimeneas de Ventilacion
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/transperencia"
                onClick={handletransparenciaClick}
              >
                Transparencia
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Contrataciones
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/contrataciones/bienes-servicio1"
                    onClick={handlebienesClickb1}>
                    Bienes - Servicios 1
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" to="/contrataciones/bienes-servicio2"
                    onClick={handlebienesClickb2}>
                    Bienes - Servicios 2
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/marco-legal"
                onClick={handlemarcoClick}
              >
                Marco Legal
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/resoluciones"
                onClick={handleResolucionesClick}
              >
                Resolucióne
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

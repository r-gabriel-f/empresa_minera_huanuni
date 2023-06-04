import React from 'react';
import '../components/NavBar.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#C4C8D3"}}>
      <div className="container-fluid" style={{ marginLeft: "10px" }}>
        <a className="navbar-brand" href="#">E. M. H.</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item dropdown" >
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Institucional</a>
              <ul className="dropdown-menu" >
                <li><a className="dropdown-item" href="#">Mision y Vision</a></li>
                <li><a className="dropdown-item" href="#">Historia de la Empresa</a></li>
                <li><a className="dropdown-item" href="#">Actividad Principal Mineralogia</a></li>
                <li><a className="dropdown-item" href="#">Organigrama</a></li>
                <li><a className="dropdown-item" href="#">Hubicacion Geografica-Infografica-Distacia-Altitud</a></li>
                <li><a className="dropdown-item" href="#">Potencial Minerologico</a></li>
                <li><a className="dropdown-item" href="#">Resumen Tecnico</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Proyectos</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Profundizacion Rampa Principal</a></li>
                <li><a className="dropdown-item" href="#">Dique de Colas Willa Khollu</a></li>
                <li><a className="dropdown-item" href="#">Contruccion Chimeneas de Ventilacion</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Transparencia</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">POA</a></li>
                <li><a className="dropdown-item" href="#">Nomina Personal</a></li>
                <li><a className="dropdown-item" href="#">Escala Salarial</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Contrataciones</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Bienes - Servicios 1</a></li>
                <li><a className="dropdown-item" href="#">Bienes - Servicios 2</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Marco Legal</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Leyes</a></li>
                <li><a className="dropdown-item" href="#">Decretos</a></li>
                <li><a className="dropdown-item" href="#">Reglamentos</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Resolucióne</a>
            </li>
            
          </ul>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

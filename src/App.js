import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import { Head } from './components/Head';
import { Footer } from './components/Footer';

import { Start } from './components/Start';
import { Pages1 } from './components/StartPages/Pages1';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Pages2 } from './components/StartPages/Pages2';
import { Pages3 } from './components/StartPages/Pages3';
import { MisionVision } from './components/Institucional/MisionVision';
import { HistoriaEmpresa } from './components/Institucional/HistoriaEmpresa';
import { ActividadPrincipalMineralogia } from './components/Institucional/ActividadPrincipalMineralogia';
import { Organigrama } from './components/Institucional/Organigrama';
import { HubicacionGeograica } from './components/Institucional/HubicacionGeograica';

import { ResumenTecnico } from './components/Institucional/ResumenTecnico';
import { Potencial } from './components/Institucional/Potencial';
import { Profundizacio } from './components/Proyectos/Profundizacio';
import {Dique} from './components/Proyectos/Dique';
import { Contruccion } from './components/Proyectos/Contruccion';
import { Poa } from './components/Transparencia/Poa';
import { Bienesone } from './components/Contrataciones/Bienesone';
import { Bienestwo } from './components/Contrataciones/Bienestwo';
import { Marco } from './components/MarcoLegal/Marco';
import { Resulaciones } from './components/Resulaciones/Resulaciones';




function App() {
  return (
    <Router>
      <Navbar />
      <Head />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/inicio/pages1" element={<Pages1 />} />
        <Route path="/inicio/pages2" element={<Pages2 />} />
        <Route path="/inicio/pages3" element={<Pages3 />} />
        <Route path="/institucional/mision-vision" element={<MisionVision />} />
        <Route path="/institucional/historia-empresa" element={<HistoriaEmpresa />} />
        <Route path="/institucional/actividad-principal-mineralogia" element={<ActividadPrincipalMineralogia />} />
        <Route path="/institucional/organigrama" element={<Organigrama />} />
        <Route path="/institucional/hubicacion-geografico-infografica-distancia-altitud" element={<HubicacionGeograica />} />
        <Route path="/institucional/potencial-minerologico" element={<Potencial/>} />
        <Route path="/institucional/resumen-tecnico" element={<ResumenTecnico/>} />
        <Route path="/proyectos/profundizacion-rampa-principal" element={<Profundizacio/>} />
        <Route path="/proyectos/dique-de-colas-willa-khollu" element={<Dique/>} />
        <Route path="/proyectos/contruccion-chimeneas-de-ventilzacion" element={<Contruccion/>} />
        <Route path="/transperencia" element={<Poa/>} />
        <Route path="/contrataciones/bienes-servicio1" element={<Bienesone/>} />
        <Route path="/contrataciones/bienes-servicio2" element={<Bienestwo/>} />
        <Route path="/marco-legal" element={<Marco/>} />
        <Route path="/resoluciones" element={<Resulaciones/>} />

        {/* ...otras rutas... */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

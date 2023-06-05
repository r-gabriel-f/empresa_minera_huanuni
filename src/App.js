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
        {/* ...otras rutas... */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

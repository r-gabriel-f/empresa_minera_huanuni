import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import { Head } from './components/Head';
import { Footer } from './components/Footer';
import { Interests } from './components/Interests';





function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Head></Head>
      <Interests></Interests>
      <Footer></Footer>
    </div>
  );
}

export default App;

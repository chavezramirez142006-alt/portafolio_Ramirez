
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Perfil from './components/Perfil/Perfil';
import Habilidades from './components/Habilidades/Habilidades';
import Proyectos from './components/Proyectos/Proyectos';
import Contacto from './components/Contactos/Contactos';
import Servicios from './components/Servicios/Servicios';
import Certificados from './components/Certificados/Certificados';
import Footer from './components/Footer/Footer';
import './App.css';
import './index.css';






function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Perfil />
      <Habilidades />
      <Proyectos  />
      <Contacto />
      <Servicios />
      <Certificados />
      <Footer />
      {/* El resto de secciones irán aquí debajo.
          Ejemplo: <Footer />
      */}
    </>
  )
}
export default App;

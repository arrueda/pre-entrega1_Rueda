import './App.css';
import Navbar from './Componentes/js/Navbar';
import Saludos from './Componentes/js/ItemListContainer';


function App() {
  return (
    <div className='App'>
      <div className='navBar'>
        <Navbar />
      </div>
      <div className='saludos-content'>
        <h2>Nuestros empleados te saludan...</h2>
        <Saludos 
          imagen='monica'
          nombre='Monica Bellucci'
          idioma='italiano'
          texto='Ciao a tutti, ciao mondo!!' />
        <Saludos 
          imagen='winnie'
          nombre='Winnie Mandela'
          idioma='zulu'
          texto='Sanibonani nonke, sanibonani mhlaba!!!!' />
        <Saludos 
          imagen='san'
          nombre='San Martin'
          idioma='castellano'
          texto='Hola a todos, hola mundo!!' />
      </div>
    </div>
    
  );
}

export default App;

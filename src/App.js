import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Clicker } from './componentes/Clicker/Clicker';
import { NavBar } from "./componentes/NavBar/NavBar";



function App() {

  const [show, setShow] = useState(true)

  const handleShow = () => {
    setShow(!show)
  }




  return (
    <div >
      <NavBar/>

      {/* ejemplo para el desmontaje de un componente */}
      <button onClick={handleShow}>show</button>
      {show && <Clicker />}
      
      {/* <Clicker/> */}

    </div>
  );
}

export default App;

// estados de un componente
/*



*/
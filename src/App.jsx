import './App.css'
import { useNavigate } from 'react-router-dom';

function App() {
  const funcNav = useNavigate(); 
  function Navega() {
    funcNav('/Home')
  }

  return (
    <div className='door'>
      <div>
        <h1>Pagina de Inicio</h1>
        <button className='dft' onClick={Navega}>Ir para Home</button>
      </div>
    </div>
  )
}

export default App

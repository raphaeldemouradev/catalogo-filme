import './App.css'
import { useNavigate } from 'react-router-dom';

function App() {
  const funcNav = useNavigate(); 
  function Navega() {
    funcNav('/Home')
  }

  return (
    <div>
      <h1>Pagina de Inicio</h1>
      <button onClick={Navega}>Ir para Home</button>
    </div>
  )
}

export default App

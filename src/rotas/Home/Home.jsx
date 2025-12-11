import { useNavigate } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  const funcNav = useNavigate();
  function Navega() {
    funcNav('/App')
  }

  return (
    <div>
        <Navbar />
        <h2>Home pag</h2>
        <button onClick={Navega}>Voltar para Inicio</button>
    </div>
  )
}

export default Home

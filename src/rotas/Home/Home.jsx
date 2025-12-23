import { useNavigate } from "react-router-dom";
import './StylesHome.css';
import Navbar from "../../components/Navbar/Navbar";
import Model from "../../components/Model/Model";

function Home() {
  const funcNav = useNavigate();
  function Navega() {
    funcNav('/App')
  }

  return (
    <div>
        <Navbar />
        <div className="contentHome">
          <Model />
        </div>

        <h2>Home pag</h2>
        <button onClick={Navega}>Voltar para Inicio</button>
    </div>
  )
}

export default Home

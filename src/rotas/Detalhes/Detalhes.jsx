import { useNavigate } from 'react-router-dom';
import './StylesDetalhes.css';

function Detalhes() {
    const funcNav = useNavigate()
    function Navega() {
        funcNav('/Home')
    }
    
    return (
        <div>
            <button onClick={Navega}>Voltar</button>
        </div>
    )
}

export default Detalhes
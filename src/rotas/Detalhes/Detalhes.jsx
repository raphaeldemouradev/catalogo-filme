import { useNavigate, useParams } from 'react-router-dom';
import './StylesDetalhes.css';

function Detalhes() {
    // Hook URL do filme clicado
    const { id } = useParams();

    // Hook Voltar
    const funcNav = useNavigate();
    function Navega() {
        funcNav(`/Home`)
    }

    return (
        <div>
            <h1>Detalhes do filme: {id}</h1>
            <button onClick={Navega}>Voltar</button>
        </div>
    )
}

export default Detalhes
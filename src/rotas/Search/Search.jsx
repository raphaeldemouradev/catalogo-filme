import { useNavigate } from 'react-router-dom';
import './StylesSearch.css';

function Search() {
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

export default Search
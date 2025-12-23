import { useNavigate } from 'react-router-dom';
import './StylesNavbar.css';

function Navbar() {
    const funcNav = useNavigate()
    function Navega() {
        funcNav('/Search')
    }
    return (
        <div className='contentNav'>
            <div className='containerNav'>
                <h3>LOGTV</h3>
            </div>
            <div className='searchArea'>
                <input type="text" />
                <button onClick={Navega}>O</button>
            </div>
        </div>
    )
}

export default Navbar
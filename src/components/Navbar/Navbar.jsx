import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StylesNavbar.css';

function Navbar() {
    const funcNav = useNavigate()
    function Navega() {
        if (search == "") {
            alert("Erro de Busca")
        } else {
            funcNav(`/Search?query=${search}`)
        }
    }

    const [search, setSearch] = useState('');

    return (
        <div className='contentNav'>
            <div className='containerNav'>
                <h3>LOGTV</h3>
            </div>
            <div className='searchArea'>
                <input 
                    type="text"
                    placeholder='Search Movie' 
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
                <span class="material-symbols-outlined" onClick={Navega} type='submit'>search</span>
            </div>
        </div>
    )
}

export default Navbar
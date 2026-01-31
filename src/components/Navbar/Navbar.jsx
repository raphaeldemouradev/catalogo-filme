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

    const keyEnter = (event) => {
        if (event.key === 'Enter') {
            Navega();
        }
    }

    const [search, setSearch] = useState('');

    return (
        <div className='container-nav'>
            <section className='title-nav'>
                <h3>LOGTV</h3>
            </section>
            <section className='search-area'>
                <input 
                    type="text"
                    placeholder='Search Movie' 
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    onKeyDown={keyEnter}
                />
                <span 
                    className="material-symbols-outlined" 
                    onClick={Navega} 
                    type='submit'
                    >search
                </span>
            </section>
        </div>
    )
}

export default Navbar
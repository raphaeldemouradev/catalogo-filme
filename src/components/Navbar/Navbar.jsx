import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StylesNavbar.css';

function Navbar() {
    const [search, setSearch] = useState('');

    const NavTo = useNavigate()

    function FuncNav() {
        if (search == "") {
            alert("Erro de Busca")
        } else {
            NavTo(`/search?query=${search}`)
        }
    }

    const keyEnter = (event) => {
        if (event.key === 'Enter') {
            FuncNav();
        }
    }

    return (
        <div className='container-nav'>
            <section className='title-nav'>
                <h2>LOGTV</h2>
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
                    onClick={FuncNav}
                    type='submit'
                > 
                search
                </span>
            </section>
        </div>
    )
}

export default Navbar
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx'
import './StylesSearch.css';

const url = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMAGE_URL;

function Search() {
    const funcNav = useNavigate()
    function Navega() {
        funcNav('/Home')
    }

    const [searchParams] = useSearchParams();
    const query = searchParams.get('query') || '';

    // Hook de Busca
    const [dados, setDados] = useState([]);

    useEffect(() => {
      const dadosApi = async () => {
        const getMovie = `${url}/search/movie?api_key=${apiKey}&query=${query}`;
  
        const response = await fetch(getMovie);
        if (!response.ok) {
          console.log(`Erro de HTTP: Status ${response.status}`);
        } else {
          const res = await response.json();

          console.log(res.results);
          setDados(res.results);
        }
      };

      dadosApi();
    }, []);
    // Hook de Busca

    return (
        <div className='containerSearch'>
            <Navbar />
            <button onClick={Navega} className='nav-button'>Voltar Home</button>
            <div className='contentSearch'>
                <section>
                    <h3>Resultados para: {query}</h3>
                </section>

                <aside>
                    {dados && dados.map((movie) => ( 
                        <div className='contentModel' key={movie.id}>
                            <div className='imgModel'>
                                <img src={`${imageUrl}${movie.poster_path}`} alt={movie.title} />
                            </div>
                            <div className='detailsModel'>
                                <button onClick={Navega}>Detalhes</button>
                            </div>
                        </div>
                    ))}
                </aside>
            </div>
        </div>
    )
}

export default Search
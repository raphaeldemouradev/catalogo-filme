import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import './StylesSearch.css';
import '../../components/MovieResponse/MovieResponse.css'; // css do home

const url = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMAGE_URL;

function Search() {
    const funcNav = useNavigate();
    function Navega() {
        funcNav('/Home')
    }

    // Hook URL
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
          //console.log(res.results);

          setDados(res.results);
        }
      };

      dadosApi();
    }, [query]);
    // Hook de Busca

    return (
        <div className='containerSearch'>
            <div className='searchNavbar'>
                <span className="material-symbols-outlined" onClick={Navega}>arrow_back</span>
                <Navbar />
            </div>

            <div className='contentSearch'>
                <section className='result'>
                    <h3>Resultados para: <strong>{query}</strong></h3>
                </section>

                <aside>
                    {dados && dados.map((movie) => ( 
                        <div className='content-model' key={movie.id}>
                            <div className='img-model'>
                                <img src={`${imageUrl}${movie.poster_path}`} alt={movie.title} />
                            </div>
                            <div className='details-model'>
                                <Link to={`/Detalhes/${movie.id}`} className='link-button'>Detalhes</Link>
                            </div>
                        </div>
                    ))}
                </aside>
            </div>
        </div>
    )
}

export default Search
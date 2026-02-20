import { Link, useNavigate } from 'react-router-dom';
import { useMovieSearch } from '../../hooks/useMovieSearch';
import Navbar from '../../components/Navbar/Navbar'
import './StylesSearch.css';
import '../../components/MovieResponse/MovieResponse.css'; // css do home

const imageUrl = import.meta.env.VITE_IMAGE_URL;

function Search() {
    const funcNav = useNavigate();
    function Navega() {
        funcNav('/Home')
    }

    const { query, dados, loading } = useMovieSearch();
    
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
                    {loading && <div className='loading'>Carregando...</div>}

                    {!loading && dados.map((movie) => ( 
                        <div className='content-model' key={movie.id}>
                            <div className='img-model'>
                                <img src={`${imageUrl}${movie.poster_path}`} alt={movie.title} />
                            </div>
                            <div className='details-model'>
                                <Link to={`/Detalhes/${movie.id}`} className='link-button'>Detalhes</Link>
                            </div>
                        </div>
                    ))}

                    {!loading && dados && dados.length === 0 && (
                        <div className='no-results'>
                            <p>❌Filme não encontrado❌</p>
                        </div>
                    )}
                </aside>
            </div>
        </div>
    )
}

export default Search
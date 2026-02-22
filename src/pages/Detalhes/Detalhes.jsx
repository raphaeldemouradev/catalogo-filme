import { useNavigate } from 'react-router-dom';
import { useMovieDetalhes } from '../../hooks/useMovieDetalhes';
import './StylesDetalhes.css';

const imageUrl = import.meta.env.VITE_IMAGE_URL;

function Detalhes() { 
    const funcNav = useNavigate();
    function Navega() {
        funcNav(`/Home`)
    }

    const { dados, loading } = useMovieDetalhes();

    return (
        <div>
            <header className='header-detalhes'>
                <span className="material-symbols-outlined" onClick={Navega}>arrow_back</span>
                <h2>LOGTV</h2>
            </header>

            {loading ? (
                <div className='loading'>Carregando...</div>
            ):(

            <main className='container-detalhes'>
                <section className='img-detalhes'>
                    <img
                        src={`${imageUrl}${dados.poster_path}`}
                        alt={dados.title}
                    />
                </section>

                <section className='info-movie'>
                    <div className='title-movie'>
                        <h2>{dados.title}</h2>
                        <h3>{(dados.genres?.map(g => g.name).join(', '))}</h3>

                            <aside>
                                <div>
                                    <p><span className="material-symbols-outlined">star_rate_half</span>{Number(dados.vote_average).toFixed(1)}</p>
                                </div>

                                <div>
                                    <p>
                                        <span className="material-symbols-outlined">schedule</span>
                                        {dados.runtime} min</p>
                                </div>

                                <div>
                                    <p><span className="material-symbols-outlined">calendar_month</span>{parseFloat(dados.release_date)}</p>
                                </div>
                            </aside>
                        
                        <p className='description'><strong>DESCRIÇÃO:</strong> {dados.overview}</p>
                    </div>


                    <div className='credits'>
                        <div>
                            <h3>Creditos (imdb)</h3>
                            <p>Nota média (imdb): {Number(dados.vote_average).toFixed(1)}</p>
                            <p>Total de votos (imdb): {dados.vote_count}</p>
                            <p>Tempo: {dados.runtime}</p>
                            <p>Lançado em: {dados.release_date}</p>
                        </div>
                    </div>
                </section>
            </main>
            )}
        </div>
    )
}

export default Detalhes
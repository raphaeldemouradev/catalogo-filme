import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './StylesDetalhes.css';

const url = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMAGE_URL;

function Detalhes() {
    // Hook URL do filme clicado
    const { id } = useParams();

    // Hook Voltar
    const funcNav = useNavigate();
    function Navega() {
        funcNav(`/Home`)
    }

    // Hook de Busca
    const [dados, setDados] = useState([]);
    
    useEffect(() => {
        const dadosApi = async () => {
        const getMovie = `${url}/movie/${id}?api_key=${apiKey}`;

        const response = await fetch(getMovie);
            if (!response.ok) {
                console.log(`Erro de HTTP: Status ${response.status}`);
            } else {
                const res = await response.json();
                //console.log(res);

                setDados(res);
            }
        };
    
        dadosApi();
    }, [id]);
    // Hook de Busca

    return (
        <div>
            <header className='header-detalhes'>
                <span className="material-symbols-outlined" onClick={Navega}>arrow_back</span>
                <h2>LOGTV</h2>
            </header>

            <main className='content-detalhes'>
                <img 
                    src={`${imageUrl}${dados.poster_path}`} 
                    alt={dados.title}
                    className='img-detalhes'
                />

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
        </div>
    )
}

export default Detalhes
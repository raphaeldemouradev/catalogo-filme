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

                console.log(res);
                setDados(res);
            }
        };
    
        dadosApi();
    }, [id]);
    // Hook de Busca

    return (
        <div>
            <header className='header-detalhes'>
                <button onClick={Navega}>Voltar</button>
                <h2>LOGTV</h2>
            </header>

            <div className='content-detalhes'>
                <img 
                    src={`${imageUrl}${dados.poster_path}`} 
                    alt={dados.title}
                    className='img-detalhes'
                />

                <div className='info-movie'>
                    <h2>{dados.title}</h2>
                    <p>Tempo: {dados.runtime}</p>
                    <p>Nota média (imdb): {dados.vote_average}</p>
                    <p>Lançado em: {dados.release_date}</p>
                    <p>Total de votos (imdb): {dados.vote_count}</p>
                </div>
            </div>
        </div>
    )
}

export default Detalhes
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './StylesModel.css';

const url = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMAGE_URL;

function Model() {
    const funcNav = useNavigate(); 
    function Navega() {
      funcNav('/Detalhes')
    }

    // Hook de Busca
    const [dados, setDados] = useState([]);

    useEffect(() => {
      const dadosApi = async () => {
        const topRateMovie = `${url}/movie/top_rated?api_key=${apiKey}`; //get-20-top
  
        const response = await fetch(topRateMovie);
        if (!response.ok) {
          console.log(`Erro de HTTP: Status ${response.status}`);
        } else {
          const res = await response.json();
          console.log(res.results.poster_path);
          console.log(res.results);

          setDados(res.results);
        }
      };

      dadosApi();
    }, []);
    // Hook de Busca
    
    return (
        <div className='containerModel'>
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
        </div>
    )
}

export default Model
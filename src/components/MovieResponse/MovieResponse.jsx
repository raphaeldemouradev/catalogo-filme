import { Link } from 'react-router-dom';
import { useTopMovies } from '../../hooks/useTopMovies';
import './MovieResponse.css';

const imageUrl = import.meta.env.VITE_IMAGE_URL;

function MovieResponse() {
    
    const { TopMovie, loading } = useTopMovies();
    if (loading) {
      return <div className='loading'>Carregando...</div>
    }
    
    return (
        <div className='container-model'>

          {TopMovie && TopMovie.map((movie) => ( 
            <div className='content-model' key={movie.id}>
              <div className='img-model'>
                <img src={`${imageUrl}${movie.poster_path}`} alt={movie.title} />
              </div>

              <div className='details-model'>
                <Link to={`/Detalhes/${movie.id}`} className='link-button'>Detalhes</Link>
              </div>
            </div>
          ))}

        </div>
    )
}

export default MovieResponse
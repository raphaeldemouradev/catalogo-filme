import { Link } from 'react-router-dom';
import { useMovies } from '../../hooks/useMovies';
import './MovieResponse.css';

const imageUrl = import.meta.env.VITE_IMAGE_URL;

function MovieResponse() {
    
    const TopMovie = useMovies()
    
    return (
        <div className='containerModel'>
          {TopMovie && TopMovie.map((movie) => ( 
            <div className='contentModel' key={movie.id}>
              <div className='imgModel'>
                <img src={`${imageUrl}${movie.poster_path}`} alt={movie.title} />
              </div>
              <div className='detailsModel'>
                <Link to={`/Detalhes/${movie.id}`} className='link-button'>Detalhes</Link>
              </div>
            </div>
          ))}
        </div>
    )
}

export default MovieResponse
import { useEffect, useState } from "react";

const url = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export function useTopMovies() {
  const [TopMovie, setTopMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);

        console.log("TRY: Buscando dados...")
        const topRateMovie = `${url}/movie/top_rated?api_key=${apiKey}`;
        const response = await fetch(topRateMovie);
          if (!response.ok) {
            throw new Error(`Erro na API: ${response.status}`)
          }

        const res = await response.json();
        console.log(res);
        setTopMovie(res.results)

      } catch (err) {
        console.error("CATCH: Erro de requisição", err)

      } finally {
        setLoading(false)
      }
    
    } 
    fetchMovie()
  }, [])

  return { TopMovie, loading }
}

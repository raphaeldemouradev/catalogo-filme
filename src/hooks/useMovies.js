import { useEffect, useState } from "react";

const url = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export function useMovies() {
  const [TopMovie, setTopMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const topRateMovie = `${url}/movie/top_rated?api_key=${apiKey}`; //get-20-top

      const response = await fetch(topRateMovie);
      if (!response.ok) {
        console.log(`Erro de HTTP: Status ${response.status}`);
      } else {
        const res = await response.json();
        //console.log(res.results);

        setTopMovie(res.results);
      }
    };

    fetchMovie()
  }, []);

  return TopMovie
}

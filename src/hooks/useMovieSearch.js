import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const url = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export function useMovieSearch() {
    const [dados, setDados] = useState([]);
    const [loading, setLoading] = useState(true);

    //Get URL
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');

    //Render
    useEffect(() => {
        async function dadosApi() {
            try {
                setLoading(true);
                
                const getMovie = `${url}/search/movie?api_key=${apiKey}&query=${query}`
                const response = await fetch(getMovie)
                if (!response.ok) {
                    console.log(`Erro de HTTP: Status ${response.status}`);
                } else {
                    const res = await response.json();
                    setDados(res.results);
                };
            } catch (error) {
                console.error("Erro de requisição", error.stack)
            } finally {
                setLoading(false)
            }
        };

        dadosApi()
    }, [query])

    return { query, dados, loading }
}
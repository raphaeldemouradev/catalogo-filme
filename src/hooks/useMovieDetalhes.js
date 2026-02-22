import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const url = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export function useMovieDetalhes() {
    const [dados, setDados] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        async function dadosApi() {
            try {
                const getMovie = `${url}/movie/${id}?api_key=${apiKey}`;
                const response = await fetch(getMovie);
                if (!response.ok) {
                    console.log(`Erro de HTTP: Status ${response.status}`)
                } else {
                    const res = await response.json();
                    setDados(res);
                }
            } catch (error) {
                console.error("Erro de requesição", + error.stack)
            }
        }
        dadosApi()
    }, [id])

    return { dados }
}
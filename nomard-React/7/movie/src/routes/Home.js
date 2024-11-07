import {useEffect, useState} from "react";
import Movie from "../components/movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const url = "https://nomad-movies.nomadcoders.workers.dev/movies";
    const getMovies = async () => {
        const json = await (await fetch(url)).json();
        setMovies(json);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);
    console.log(movies);
    return (
        <div className="App">
            {loading ? (
                <h1>loading...</h1>
            ) : (
                <div>
                    {movies.map((movie) => <Movie key={movie.id} id={movie.id} genre_ids={movie.genre_ids} original_title={movie.original_title} overview={movie.overview} poster_path={movie.poster_path}/>)}
                </div>
            )}
        </div>
    );
}

export default Home;
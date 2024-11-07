import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const getMovie = async () => {
        const json = await (
            await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}`)
        ).json();
        setLoading(false)
        setMovie(json);
        console.log(json);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            {loading? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <img src={movie.poster_path} alt={movie.original_title} style={{width: "450px"}}/>
                    <h1>{movie.original_title}</h1>
                    <p>{movie.overview}</p>
                    <ul>
                        {movie.genres.map((genre) => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>

                </div>
            )}
        </div>
    )
}

export default Detail;
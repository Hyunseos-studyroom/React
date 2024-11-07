import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({poster_path, original_title, overview, genre_ids, id}) {
    return (
        <div>
            <img src={poster_path} alt={original_title} style={{width:"200px"}}/>
            <h2><Link to={`/movie/${id}`}>{original_title}</Link></h2>
            <p>{overview}</p>
            <ul>
                {genre_ids.map((genre) => (
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
            <hr/>
        </div>
    )
}

Movie.propTypes = {
    poster_path: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default Movie;
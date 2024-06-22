import PropTypes from "prop-types";

export const MovieCard = ({ movie, onMovieClick }) => {
    return (<div
        onClick={() => {
            onMovieClick(movie);
        }}> {movie.title}
    </div>);
};

MovieCard.propTypes = {
    movies: PropTypes.shape({
        title: PropTypes.string,
        image: PropTypes.string,
        description: PropTypes.string,
        actors: PropTypes.string,
        genre: PropTypes.string,
        director: PropTypes.string,
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};
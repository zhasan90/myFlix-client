import PropTypes from "prop-types";
import { Button , card } from "react-bootstrap";

export const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <Card>
            <Card.Img variant = "top" src = {book.image}/>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.Director}</Card.Text>
                <Card.Text>{movie.Cast}</Card.Text>
                <Button onClick={() => onMovieClick(book)} variant = "link">
                    Click
                </Button>
            </Card.Body>
        </Card>
    );
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
import PropTypes from "prop-types";
import { Button , Card } from "react-bootstrap";

export const MovieCard = ({ movie, onMovieClick }) => {
    // return (<div
    //     onClick={() => {
    //         onMovieClick(movie);
    //     }}> {movie.title}
    // </div>);
        return (
          <Card onClick={() => onMovieClick(movie)}>
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.genre.Name}</Card.Text>
              <Card.Text>{movie.director.Name}</Card.Text>
              <Card.Text>{movie.actors}</Card.Text> 
            </Card.Body>
          </Card>
        );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        image: PropTypes.string,
        description: PropTypes.string,
        actors: PropTypes.array,
        genre: PropTypes.object,
        director: PropTypes.object,
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};
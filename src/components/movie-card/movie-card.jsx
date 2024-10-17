import PropTypes from "prop-types";
import { Button , Card, Container } from "react-bootstrap";

export const MovieCard = ({ movie, onMovieClick }) => {
    // return (<div
    //     onClick={() => {
    //         onMovieClick(movie);
    //     }}> {movie.title}
    // </div>);
        return (
          <Container>
            <Card style={{ width: '18rem'}} onClick={() => onMovieClick(movie)}>
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
              <Card.Title>Title: {movie.title}</Card.Title>
              <Card.Text>Genre: {movie.genre.Name}</Card.Text>
              <Card.Text>Director: {movie.director.Name}</Card.Text>
              <Card.Text>Actors: {movie.actors}</Card.Text> 
            </Card.Body>
            </Card>
          </Container>
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
import PropTypes from "prop-types";
import { Button , Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
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
              <Card.Text>Description: {movie.description}</Card.Text>
              <Card.Text>Director: {movie.director.Name}</Card.Text>
              <Card.Text>Actors: {movie.actors}</Card.Text> 
              <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
                <Button variant = "link">Open</Button>
              </Link>
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
    // onMovieClick: PropTypes.func.isRequired
};
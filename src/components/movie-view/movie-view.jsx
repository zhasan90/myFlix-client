import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./movie-view.scss"

export const MovieView = ({ movies , onBackClick }) => {
    const { MovieID } = useParams();

    const movie = movies.find (m => m.id === MovieID)

    return (
        <div>
            <div>
                <img className="w-100" src={movie.image} />
            </div>
            <div>
                <span>Title: </span>
                <span>{movie.title}</span><br />
                <span>Description: </span>
                <span>{movie.description}</span><br />
            </div>
            <div>
                <span>Genre: </span>
                <span>{movie.genre.Name}</span><br />
                <span>Genre Description: </span>
                <span>{movie.genre.Description}</span><br />
            </div>
            <div>
                <span>Director: </span>
                <span>{movie.director.Name}</span><br />
                <span>DOB: </span>
                <span>{movie.director.DOB}</span>
            </div>
            <div>
                <span>Cast: </span>
                <span>{movie.actors}</span>
            </div>
            <Link to={`/`}>
                <button className="back-button">Back</button>
            </Link>
        </div>
    );
};
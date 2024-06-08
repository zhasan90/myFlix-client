export const MovieView = ({ movie, onBackClick }) => {
    return (
        <div>
            <div>
                <img src={movie.image} />
            </div>
            <div>
                <span>Title: </span>
                <span>{movie.title}</span><br />
                <span>Description: </span>
                <span>{movie.description}</span><br />
            </div>
            <div>
                <span>Genre: </span>
                <span>{movie.genre.name}</span><br />
                <span>Genre Description: </span>
                <span>{movie.genre.description}</span><br />
            </div>
            <div>
                <span>Director: </span>
                <span>{movie.director.name}</span><br />
                <span>DOB: </span>
                <span>{movie.director.dob}</span>
            </div>
            <div>
                <span>Cast: </span>
                <span>{movie.cast}</span>
            </div>
            <button onClick={onBackClick}>Back</button>
        </div>
    );
};
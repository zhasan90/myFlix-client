import { useState, useEffect } from "react"
import { MovieCard } from "../../../movie-card/movie-card";
import { MovieView } from "../../../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";

export const MainView = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [user, setUser] = useState(null);

    if (!user) {
        return <LoginView />;
    }

    useEffect(() => {
        fetch("https://movie-api-7rs7.onrender.com/movies")
            .then((response) => response.json())
            .then((data) => {
                const moviesFromApi = data.map((doc) => {
                    return {
                        id: doc._id,
                        title: doc.Title,
                        description: doc.Description,
                        image: doc.ImagePath,
                        actors: doc.Actors,
                        genre: doc.Genre,
                        director: doc.Director,
                    };
                });

                setMovies(moviesFromApi);
            });
    }, []);

    if (selectedMovie) {
        return (<MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        );
    }

    if (movies.length === 0) {
        return <div> The list is empty </div>
    }

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onMovieClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie);
                    }} />
            ))}
        </div>
    );
};
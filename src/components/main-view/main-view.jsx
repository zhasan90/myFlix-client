import { useState } from "react"
import { MovieCard } from "../../../movie-card/movie-card";
import { MovieView } from "../../../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "Interstellar.",
            description: "Exploring space and time.",
            genre: {
                name: "Sci-fi.",
                description: "Science Fiction."
            },
            director: {
                name: "Christopher Nolan.",
                dob: "July 30, 1970."
            },
            cast: ["Matthew McConaughey, ", "Jessica Chastain, ", "Anne Hathaway, ", "Matt Daemon, "],
            image: "https://m.media-amazon.com/images/I/91LMgexOIKL._AC_UL320_.jpg"
        },
        {
            id: 2,
            title: "Pulp Fiction.",
            description: "A crime anthology.",
            genre:
            {
                name: "Crime.",
                description: "Involves criminal activities and investigations."
            },
            director:
            {
                name: "Quentin Tarantino.",
                dob: "March 27, 1963."
            },
            cast: ["John Travolta, ", "Samuel L. Jackson, ", "Bruce Willis"],
            image: "https://m.media-amazon.com/images/I/81FlT3v6emL._AC_UL320_.jpg"
        },
        {
            id: 3,
            title: "Forrest Gump.",
            description: "Drama-comedy about a simple man.",
            genre:
            {
                name: ["Drama, ", "Comedy"],
                description: ["Emotional Damage, ", "Makes people laugh"]
            },
            director:
            {
                name: "Robert Zemeckis",
                dob: "May 14, 1951"
            },
            cast: ["Tom Hanks, ", "Robin Wright, ", "Gary Sinise"],
            image: "https://m.media-amazon.com/images/I/41C+R-7PdtL._AC_UL320_.jpg"
        },
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);

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
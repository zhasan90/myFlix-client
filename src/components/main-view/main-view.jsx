import { useState, useEffect } from "react"
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import "./main-view.scss";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        if (!token) {
            return;
        }
        fetch("https://movie-api-hlok.onrender.com/movies" , {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
              },    
        }).then((response) => response.json())
          .then((data) => {
            console.log(data);
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
    }, [token]);
    
    if (!user) {
        return(
        <div>
          <LoginView
            onLoggedIn={(user, token) => {
              setUser(user);
              setToken(token);
            }}
          />
          <p>or</p>
          <SignupView></SignupView>
        </div>
        );
      }
   
    if (selectedMovie) {
        return (<MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        );
    }

    if (movies.length === 0) {
        return <div> The list is empty </div>
    }
    console.log(movies)
    return (
        <>
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
        <button className = "logout-button" button onClick={() => { setUser(null); }}>Logout</button>
        </>
    );
};
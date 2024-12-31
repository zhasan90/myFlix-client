import { useState, useEffect } from "react"
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (!token) {
      return;
    }
    fetch("https://movie-api-hlok.onrender.com/movies", {
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

  return (
    <BrowserRouter>
      <Row className="justify-content-md-center">
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )}
              </>

            }
          />
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LoginView onLoggedIn={(user) => setUser(user)} />
                  </Col>
                )}
              </>

            }
          />
          <Route
            path="/movies/:MovieID"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <Col md={8}>
                    <MovieView movies={movies} />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <>
                    {movies.map((movie) => (
                      <Col className="mb-4" key={movie.id} md={3}>
                        <MovieCard movie={movie} />
                      </Col>
                    ))}
                  </>
                )}
              </>
            }
          />
        </Routes>
        <button className = "logout-button" button onClick={() => { setUser(null); localStorage.clear()}}>Logout</button>
      </Row>
    </BrowserRouter>
  );
};


//     if (!user) {
    //         return(
    //         <div>
    //           <LoginView
    //             onLoggedIn={(user, token) => {
    //               setUser(user);
    //               setToken(token);
    //             }}
    //           />
    //           <p>or</p>
    //           <SignupView></SignupView>
    //         </div>
    //         );
    //       }

    //     if (selectedMovie) {
    //         return (<MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    //         );
    //     }

    //     if (movies.length === 0) {
    //         return <div> The list is empty </div>
    //     }
    //     console.log(movies)
    //     return (
    //         <>
    //         <Row>
    //             {movies.map((movie) => (
    //                 <Col><MovieCard
    //                     key={movie.id}
    //                     movie={movie}
    //                     onMovieClick={(newSelectedMovie) => {
    //                         setSelectedMovie(newSelectedMovie);
    //                     }} />
    //                 </Col>    
    //             ))}
    //         </Row>
    //         <button className = "logout-button" button onClick={() => { setUser(null); }}>Logout</button>
    //         </>
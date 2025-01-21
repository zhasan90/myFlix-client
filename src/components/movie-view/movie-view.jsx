import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './movie-view.scss';
import { Button } from 'react-bootstrap';

export const MovieView = ({ movies, onBackClick }) => {
	const { movieID } = useParams();

	const movie = movies.find((m) => m.id === movieID);
	console.log(movie);
	console.log(location.href.split('/movies')[0] + '/' + movie.image);

	// ADD MOVIE TO FAVORITE LIST
	const addToFavoriteList = () => {
		fetch(
			`https://movie-api-hlok.onrender.com/users/${
				JSON.parse(localStorage.getItem('user')).Username
			}/movies/${movieID}`,
			{
				method: 'POST',
				headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
			}
		)
			.then((response) => {
				if (response.ok) {
					alert('The movie was added to you favourite list!');
					return response.json();
				} else {
					console.log('Failed to update your list');
				}
			})
			.then((data) => {
				localStorage.setItem('user', JSON.stringify(data));
				location.reload();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// REMOVE MOVIE FROM FAVORITE LIST
	const removeFromFavoriteList = () => {
		fetch(
			`https://movie-api-hlok.onrender.com/users/${
				JSON.parse(localStorage.getItem('user')).Username
			}/movies/${movieID}`,
			{
				method: 'DELETE',
				headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
			}
		)
			.then((response) => {
				if (response.ok) {
					alert('The movie was removed from you favourite list!');
					console.log(user.Username);
					console.log(response);
					return response.json();
				} else {
					console.log('Failed to remove the movie from your favourite list!');
				}
			})
			.then((data) => {
				localStorage.setItem('user', JSON.stringify(data));
				location.reload();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div>
			<div>
				<img
					className="w-100"
					src={location.href.split('/movies')[0] + '/' + movie.image}
				/>
			</div>
			<div>
				<span>Title: </span>
				<span>{movie.title}</span>
				<br />
				<span>Description: </span>
				<span>{movie.description}</span>
				<br />
			</div>
			<div>
				<span>Genre: </span>
				<span>{movie.genre.Name}</span>
				<br />
				<span>Genre Description: </span>
				<span>{movie.genre.Description}</span>
				<br />
			</div>
			<div>
				<span>Director: </span>
				<span>{movie.director.Name}</span>
				<br />
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

			<Button
				onClick={removeFromFavoriteList}
				variant="link"
			>
				Delete from List
			</Button>

			<Button
				onClick={addToFavoriteList}
				variant="link"
			>
				Add to my List
			</Button>
		</div>
	);
};

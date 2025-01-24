import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { MovieCard } from '../movie-card/movie-card';

export const ProfileView = ({ user, movies, onUpdateProfile, onLogout }) => {
	const [username, setUsername] = useState(user.Username);
	const [email, setEmail] = useState(user.Email);
	const [password, setPassword] = useState('');
	const [fav, setFav] = useState([]);

	useEffect(() => {
		const m = movies.filter((x) => user.FavoriteMovies.includes(x.id));
		setFav(m);
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		const updatedUser = {
			Username: username,
			Email: email,
			Password: password || undefined, // Only send password if it's changed
		};

		onUpdateProfile(updatedUser);
	};

	const addToFavorites = (movieID) => {
		if (!user.FavoriteMovies.includes(movieID)) {
			const updatedFavorites = [...user.FavoriteMovies, movieID];
			onUpdateProfile({
				...user,
				FavoriteMovies: updatedFavorites,
			})
		}
	}

	const removeFromFavorites = (movieId) => {
		const updatedFavorites = user.FavoriteMovies.filter(
			(id) => id !== movieId
		);
		// Update the user profile
		onUpdateProfile({
			...user,
			FavoriteMovies: updatedFavorites,
		});
	};

	return (
		<div className="profile-view">
			<h2>User Profile</h2>
			<div className="profile-details">
				<span>Username: </span>
				<span>{user.Username}</span>
				<br />
				<span>Email: </span>
				<span>{user.Email}</span>
				<span>Favorite Movies: </span>
				<span>{user.movies}</span>
			</div>

			<h3>Update Profile</h3>
			<Form onSubmit={handleSubmit}>
				<Form.Label>
					Username:
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</Form.Label>
				<br />
				<Form.Label>
					Email:
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Label>
				<br />
				<Form.Label>
					Password:
					<input
						type="password"
						value={password}
						placeholder="Leave blank to keep current password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Label>
				<br />
				<Button type="submit">Update</Button>
			</Form>

			<div className="mt-3 justify-content-md-center align-items-center">
				{fav.map((movie) => {
					return (
						<div
							className="mb-4"
							key={movie._id}
							md={3}
						>
							<MovieCard
								user={user}
								movie={movie}
							/>
						</div>
					);
				})}
			</div>
			<Button onClick={() => onLogout()}>Logout</Button>
		</div>
	);
};

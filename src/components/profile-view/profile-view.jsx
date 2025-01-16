import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

export const ProfileView = ({ user, movies, onUpdateProfile, onLogout }) => {
    const [username, setUsername] = useState(user.Username);
    const [email, setEmail] = useState(user.Email);
    const [password, setPassword] = useState("");
    const [fav, setFav] = useState([]);

    useEffect(() => {
        const m = movies.filter(x => user.FavoriteMovies.includes(x._id))
        setFav(m)
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedUser = {
            Username: username,
            Email: email,
            Password: password || undefined, // Only send password if it's changed
        };

        onUpdateProfile(updatedUser);
    };

    return (
        <div className="profile-view">
            <h2>User Profile</h2>
            <div className="profile-details">
                <span>Username: </span>
                <span>{user.Username}</span><br />
                <span>Email: </span>
                <span>{user.Email}</span>
                <span>Favorite Movies: </span>
                <span>{user.Movies}</span>
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
                </Form.Label><br />
                <Form.Label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Label><br />
                <Form.Label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        placeholder="Leave blank to keep current password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Label><br />
                <Button type="submit">Update</Button>
            </Form>
        </div>
    );
};
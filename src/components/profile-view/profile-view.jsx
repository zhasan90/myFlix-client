import { useState } from "react";
import { Form } from "react-bootstrap";



export const ProfileView = ({ user, onUpdateProfile, onLogout }) => {
    const [username, setUsername] = useState(user.Username);
    const [email, setEmail] = useState(user.Email);
    const [password, setPassword] = useState("");

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
                <button type="submit">Update</button>
            </Form>
        </div>
    );
};
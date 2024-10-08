import React , {useState} from "react";

export const LoginView = ({onLoggedIn}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            Username: username,
            Password: password
        };

        fetch("https://movie-api-hlok.onrender.com/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Login response: ", data);
              if (data.user) {
                localStorage.setItem("user", JSON.stringify(data.user));
                localStorage.setItem("token", data.token);
                onLoggedIn(data.user, data.token);
              } 
            })
      }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required />
            </label>
            <label htmlFor="">:
                Password:
                <input 
                 type="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 required />
            </label>
            <button className="submit-button" type="submit">
                Submit
            </button>
        </form>
    );
};
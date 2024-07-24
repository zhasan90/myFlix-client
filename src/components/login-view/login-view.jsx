import React from "react";

export const LoginView = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            access: username,
            secret: password
        };

        fetch("https://openlibrary.org/account/login.json", {
            method: "POST",
            body: JSON.stringify(data)
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                Username:
                <input type="text" />
            </label>
            <label htmlFor="">:
                Password:
                <input type="password" />
            </label>
            <button type="submit">
                Submit
            </button>
        </form>
    );
};
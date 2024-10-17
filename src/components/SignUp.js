import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'existing-users': JSON.stringify(existingUsers),
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            if (response.ok) {
                existingUsers.push({ username, password });
                localStorage.setItem('users', JSON.stringify(existingUsers));
                setMessage(data.message);
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            setMessage('An error occurred.');
        }
    };

    return (
        <div className="container">
            <h1 className="mt-5">Sign Up</h1>
            <form onSubmit={handleSignup} className="mt-3">
                <div className="mb-3">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        required
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
                {message && <p className="mt-3">{message}</p>}
            </form>
        </div>
    );
};

export default SignUp;

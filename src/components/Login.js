import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';




const Login = ({ setAuthenticated }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://levelstotrading.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            setMessage(data.message);

            if (response.ok) {
                setAuthenticated(true);
                localStorage.setItem('authenticated', 'true');
                navigate('/usermanagement'); // Redirect to User Management page
            }
        } catch (error) {
            setMessage('Login failed. Please try again.');
        }
    };

    return (
        <div>

            {/*  Example 2: JSX code. HTML and JS working together  */}
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
            <p>Don't have an account? <Link to="/signup">Sign up here</Link></p> {/* Link to signup */}
        </div>
    );
};

export default Login;

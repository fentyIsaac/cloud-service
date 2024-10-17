import React, { useState } from 'react';
import { useUser } from '../UserContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = ({ setAuthenticated }) => {
    const { setUser } = useUser(); // Use the hook to access setUser
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Get the navigate function

    const handleLogin = async (e) => {
        e.preventDefault();

        // Simulated user authentication logic
        const fakeUser = { username, password }; // Simulated user

        if (fakeUser.username && fakeUser.password) {
            localStorage.setItem('authenticated', 'true');
            setAuthenticated(true);
            setUser(fakeUser); // Set the user in context
            setMessage('Login successful!');

            // Redirect to User Management page
            navigate('/usermanagement'); // Redirect here
        } else {
            setMessage('Invalid username or password.');
        }
    };

    return (
        <div>
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
        </div>
    );
};

export default Login;

import React, { useState } from 'react';
import { useUser } from '../UserContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ({ setAuthenticated }) => {
    const { setUser } = useUser(); // Use the hook to access setUser
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Get the navigate function

    const handleLogin = async (e) => {
        e.preventDefault();

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
        <div className="container">
            <h2 className="mt-5">Login</h2>
            <form onSubmit={handleLogin} className="mt-3">
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
                <button type="submit" className="btn btn-primary">Login</button>
                {message && <p className="mt-3">{message}</p>}
            </form>
        </div>
    );
};

export default Login;

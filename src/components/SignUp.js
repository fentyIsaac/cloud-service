import React, { useState } from 'react';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();

        // Retrieve existing users from LocalStorage
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'existing-users': JSON.stringify(existingUsers), // Pass existing users as a header
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            if (response.ok) {
                // Save the new user to LocalStorage
                existingUsers.push({ username, password }); // Hash the password in a real app
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
        <form onSubmit={handleSignup}>
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
            <button type="submit">Sign Up</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default SignUp;

import React, { useState } from 'react';
import { useUser } from '../UserContext'; // Import the custom hook

const UserManagement = () => {
    const { user } = useUser(); // Access user data from the hook
    const [password, setPassword] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [users, setUsers] = useState([]);

    // Check if user is logged in
    if (!user) {
        return <p>Please log in to access User Management.</p>; // Handle the null case
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!password || !employeeId || !file) {
            setMessage('All fields are required.');
            return;
        }

        const formData = new FormData();
        formData.append('username', user.username); // Use logged-in username
        formData.append('password', password);
        formData.append('employeeId', employeeId);
        formData.append('file', file);

        try {
            const response = await fetch('http://localhost:5000/user-management/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            const newUser = {
                id: Date.now(),
                username: user.username,
                password: btoa(password),
                employeeId,
                file: URL.createObjectURL(file),
            };
            setUsers([...users, newUser]);
            setMessage('User created successfully!');
            setPassword('');
            setEmployeeId('');
            setFile(null);
        } catch (error) {
            console.error('Error creating user:', error.message);
            setMessage('Error creating user: ' + error.message);
        }
    };

    const handleDeleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div>
            <h2>User Management</h2>
            <p>Logged in as: {user.username}</p>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <input
                type="text"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                placeholder="Employee ID"
            />
            <input
                type="file"
                onChange={handleFileChange}
            />
            <button onClick={handleUpload}>Upload</button>
            {message && <p>{message}</p>}
            
            <h3>Users</h3>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username} (ID: {user.employeeId})
                        {user.file && <a href={user.file} target="_blank" rel="noopener noreferrer">View File</a>}
                        <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;

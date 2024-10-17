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
        return <p>Please log in to access User Management.</p>;
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
        formData.append('username', user.username);
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
        <div className="container mt-5">
            <h2>User Management</h2>
            <p>Logged in as: <strong>{user.username}</strong></p>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control mb-2"
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    placeholder="Employee ID"
                />
                <input
                    type="password"
                    className="form-control mb-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <input
                    type="file"
                    className="form-control mb-2"
                    onChange={handleFileChange}
                />
                <button className="btn btn-primary" onClick={handleUpload}>Upload</button>
            </div>
            {message && <div className="alert alert-info mt-3">{message}</div>}
            
            <h3 className="mt-5">Users</h3>
            <ul className="list-group">
                {users.map(user => (
                    <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {user.username} (ID: {user.employeeId})
                        {user.file && <a href={user.file} target="_blank" rel="noopener noreferrer" className="btn btn-link">View File</a>}
                        <button className="btn btn-danger btn-sm" onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;

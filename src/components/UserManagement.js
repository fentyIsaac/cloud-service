// src/UserManagement.js
import React, { useState } from 'react';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [file, setFile] = useState(null);

    const handleCreateUser = () => {
        const newUser = {
            id: Date.now(),
            username,
            password: btoa(password), // Base64 encoding
            employeeId,
            file: file ? URL.createObjectURL(file) : null,
        };
        setUsers([...users, newUser]);
        setUsername('');
        setPassword('');
        setEmployeeId('');
        setFile(null);
    };

    const handleDeleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div>
            <h2>User Management</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
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
                onChange={(e) => setFile(e.target.files[0])}
            />
            <button onClick={handleCreateUser}>Create User</button>
            
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

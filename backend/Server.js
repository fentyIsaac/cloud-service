// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const dbFilePath = 'users.json';

let users = [];
if (fs.existsSync(dbFilePath)) {
    const data = fs.readFileSync(dbFilePath);
    users = JSON.parse(data);
}

// Signup endpoint
app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists.' });
    }

    const newUser = { username, password }; // In a real app, hash the password
    users.push(newUser);
    fs.writeFileSync(dbFilePath, JSON.stringify(users, null, 2));

    res.status(201).json({ message: 'User created successfully!' });
});

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password.' });
    }

    // Optionally, you can return user data or a token here
    res.status(200).json({ message: 'Login successful!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

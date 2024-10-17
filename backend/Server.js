const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;


const allowedOrigins = ['http://localhost:3000', 'https://levelstotrading.com'];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files

// Set up multer for file uploads in memory (without saving to the file system)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Signup endpoint (for creating new users)
app.post('/signup', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    // Here, you would typically save the user data to a database
    // For now, just return success
    res.status(201).json({ message: 'User created successfully!' });
});

// User management upload endpoint
app.post('/user-management/upload', upload.single('file'), (req, res) => {
    const { username, employeeId } = req.body;

    if (!username || !employeeId) {
        return res.status(400).json({ message: 'Username and employee ID are required.' });
    }

    const newUser = {
        username,
        employeeId,
        file: req.file ? req.file.buffer.toString('base64') : null // Store file in memory as base64 if needed
    };

    // (Optional) Process newUser data (e.g., save to a database)
    console.log('User data uploaded:', newUser);

    res.status(201).json({ message: 'User data uploaded successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

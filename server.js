const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyparser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyparser.json());

const users = [];

const SECRET_KEY = 'your_secret_key';

app.get('/', (req, res) => {
    res.send('<h1>User Authentication API</h1><p>Use Postman or curl to access the endpoints.</p>');

    res.json({
        // message: `<h1>Welcome to the User Authentication API</h1>`,
        endpoints: {
            register: '/register (POST)',
            login: '/login (POST)',
            forgotPassword: '/forgot-password (POST)'
        }
    });
});

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists!' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    users.push({ username, email, password: hashedPassword });

    res.status(201).json({ message: 'User registered successfully!' });
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(404).json({ message: 'User not found!' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid Credentials!' });
    }

    const token = jwt.sign({ username: user.username, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful!', token });
});

app.post('/forgot-password', (req, res) => {
    const { email, newPassword } = req.body;

    const user = users.find(user => user.email === email);

    if (!user) {
        return res.status(404).json({ message: 'User not found!' });
    }

    bcrypt.hash(newPassword, 10, (err, hashedPassword) => {
        if (err) {
            return res.status(500).json({ message: 'Error updating password!' });
        }
        user.password = hashedPassword;
        res.status(200).json({ message: 'Password updated Successfully!' });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
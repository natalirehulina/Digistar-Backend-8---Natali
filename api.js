const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let users = [];

// Get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Get single user
app.get('/users/:id', (req, res) => {
    const id = req.params.id; // Fixed to get the id from params correctly
    console.log(id);
    res.json(users[id]);
});

// Search user
app.get('/search', (req, res) => {
    const nama = req.query.nama;
    const user = users.find(user => user.name === nama);
    res.json(user);
});

// Create user 
app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(200).send(user);
});

// Delete user
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id, 10); // Convert id to an integer
    if (id >= 0 && id < users.length) {
        users.splice(id, 1);
        res.status(200).send(users);
    } else {
        res.status(404).send('User not found');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000'); // Added a message for clarity
});

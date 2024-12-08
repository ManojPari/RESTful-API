const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let users = require('./User');
app.use(bodyParser.json()); 

// Fetch user details
app.get('/user-details', (req, res) => {
    if (!users || users.length === 0) {
        res.status(400).send({
            statusCode: 400,
            message: 'No user data available',
        });
    } else {
        res.status(200).send({
            statusCode: 200,
            message: 'Data fetched successfully',
            data: users,
        });
    }
});

// Add a new user
app.post('/add-user', (req, res) => {
    const data = req.body;
    if (!data.name || !data.age) {
        return res.status(400).send({
            statusCode: 400,
            message: 'Invalid data. Name and age are required.',
        });
    }

    const newUser = { id: users.length + 1, ...data };
    users.push(newUser);
    res.status(200).send({
        statusCode: 200,
        message: 'User added successfully',
        data: newUser,
    });
});

// Delete a user
app.delete('/delete-user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedUsers = users.filter(user => user.id !== id);

    if (updatedUsers.length !== users.length) {
        users = updatedUsers;
        res.status(200).send({
            statusCode: 200,
            message: 'User deleted successfully',
        });
    } else {
        res.status(400).send({
            statusCode: 400,
            message: 'User not found',
        });
    }
});

// Update a user
app.put('/update-user/:id', (req, res) => {
    const id = req.params.id
    const data = req.body

    let userFound = false
    users = users.map(item => {
        if (item.id == id) {
            userFound = true;
            return { id, ...data };
        }
        return item;
    });

    if (userFound) {
        res.status(200).send({
            statusCode: 200,
            message: 'User updated successfully',
        });
    } else {
        res.status(400).send({
            statusCode: 400,
            message: 'User not found',
        });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

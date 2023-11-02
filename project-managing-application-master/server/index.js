const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// Use middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL database configuration
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'GANESHGANNU',
    database: 'bharat',
});

// Connect to the MySQL database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to the MySQL database');
});

// API endpoint to get chat messages from MySQL
app.get('/api/get/chatMessages', (req, res) => {
    const query = 'SELECT * FROM chat_messages';

    db.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'An error occurred' });
        } else {
            res.setHeader('Content-Type', 'application/json'); // Set content type
            res.json(results); // Send JSON response
        }
    });
});

// API endpoint to add a chat message to MySQL
app.post('/api/chatMessages', (req, res) => {
    const newMessage = req.body.message; // Extract the message from the request body
    const senderName = req.body.sender_name; // Extract the sender name from the request body

    // Insert the new message into the MySQL database with both sender_name and message_text
    const query = 'INSERT INTO chat_messages (sender_name, message_text) VALUES (?, ?)';
    db.query(query, [senderName, newMessage], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'An error occurred' });
        } else {
            res.json({ sender_name: senderName, message_text: newMessage }); // Return the newly added message with sender_name
        }
    });
});

// API endpoint to get assigned tasks from MySQL
app.get('/api/get/assignedTasks', (req, res) => {
    const query = 'SELECT * FROM tasks WHERE status = "assigned"';

    db.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'An error occurred' });
        } else {
            res.setHeader('Content-Type', 'application/json'); // Set content type
            res.json(results); // Send JSON response
        }
    });
});

// API endpoint to get completed tasks from MySQL
app.get('/api/get/completedTasks', (req, res) => {
    const query = 'SELECT * FROM tasks WHERE status = "completed"';

    db.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'An error occurred' });
        } else {
            res.setHeader('Content-Type', 'application/json'); // Set content type
            res.json(results); // Send JSON response
        }
    });
});

// API endpoint to get tasks from MySQL
app.get('/api/get/tasks', (req, res) => {
    const query = 'SELECT * FROM tasks';

    db.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'An error occurred' });
        } else {
            res.setHeader('Content-Type', 'application/json'); // Set content type
            res.json(results); // Send JSON response
        }
    });
});

// API endpoint to add a task to MySQL
app.post('/api/tasks', (req, res) => {
    const newTask = req.body;

    // Insert the new task into the MySQL database
    const query = 'INSERT INTO tasks (task_name, assigned_to, due_date, description) VALUES (?, ?, ?, ?)';
    db.query(query, [newTask.task_name, newTask.assigned_to, newTask.due_date, newTask.description], (err, result) => {
        if (err) {
            console.error(err); // Log the error for debugging
            return res.status(500).json({ error: 'An error occurred while adding the task.' });
        } else {
            return res.json(newTask); // Return the newly added task
        }
    });
});





app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Create web server with Express
const express = require('express');
const app = express();
const port = 3000;

// Create a comments array
const comments = [
  { name: 'John', comment: 'Hello!' },
  { name: 'Jack', comment: 'Hi!' },
];

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  comments.push(req.body);
  res.json({ message: 'Comment added!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
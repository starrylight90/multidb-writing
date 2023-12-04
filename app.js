const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/test_app');

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Your routes will go here
const userRoutes = require('./routes/user');
app.use('/api/user', userRoutes);

// Your routes will go here

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

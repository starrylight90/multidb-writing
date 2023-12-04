const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');
const TestMainUser = require('../models/TestMainUser');

// Connect to the test_main database
const testMainDB = mongoose.createConnection('mongodb://127.0.0.1:27017/test_main', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the TestMainUser model for the test_main database
const TestMainUserTestMainDB = testMainDB.model('TestMainUser', TestMainUser.schema);

// Create a new user in the test_app database
router.post('/create-user', async (req, res) => {
  try {
    const { username, email, password, phnumber, country } = req.body;

    // Create a user in the test_app database
    const newUser = await User.create({ username, email, password, phnumber, country });

    // Create a user in the test_main database
    const newTestMainUser = await TestMainUserTestMainDB.create({
      email,
      test_app1: newUser._id,
    });

    res.json({ newUser, newTestMainUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

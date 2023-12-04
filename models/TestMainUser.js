const mongoose = require('mongoose');

const testMainUserSchema = new mongoose.Schema({
  email: String,
  test_app1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const TestMainUser = mongoose.model('TestMainUser', testMainUserSchema);

module.exports = TestMainUser;

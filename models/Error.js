const mongoose = require('mongoose');

const ErrorSchema = new mongoose.Schema({
  error: {
    type: Object,
    required: true,
  },
  userId: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('error', ErrorSchema);

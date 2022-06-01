const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  guests: {
    type: Number,
  },
  amount: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  taxes: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  source: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  stripeId: {
    type: String,
  },
  sentEmail: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('reservation', ReservationSchema);

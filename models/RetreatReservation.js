const mongoose = require('mongoose');

const RetreatReservationSchema = new mongoose.Schema(
  {
    retreatName: {
      type: String,
      required: true,
    },
    villaName: {
      type: String,
      required: true,
    },
    guests: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
        },
        name: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
      },
    ],
    totalUSD: {
      type: Number,
      required: true,
    },
    stripeId: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('retreatReservation', RetreatReservationSchema);

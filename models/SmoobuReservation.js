const mongoose = require('mongoose');

// const smoobuReservation = {
// smoobuId,
//   type,
//   startDate,
//   endDate,
//   createdAt,
//   updatedAt,
//   cancelled,
//   villaId,
//   channelId,
//   guestName,
//   email,
//   phone,
//   adults,
//   children,
//   total,
//   commission,
//   notice,
//   extraNotice;
// }

const SmoobuReservationSchema = new mongoose.Schema({
  smoobuId: {
    type: Number,
    unique: true,
  },
  type: {
    type: String,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  cancelled: {
    type: Boolean,
    default: false,
  },
  villaId: {
    type: Number,
  },
  channelId: {
    type: Number,
  },
  guestName: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    default: null,
  },
  phone: {
    type: String,
    default: null,
  },
  adults: {
    type: Number,
    default: 1,
  },
  children: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    required: true,
    default: 0,
  },
  commission: {
    type: Number,
    default: 0,
  },
  notice: {
    type: String,
    default: null,
  },
  extraNotice: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model('smoobuReservation', SmoobuReservationSchema);

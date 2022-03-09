const mongoose = require('mongoose');

const VillaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  reducedPrice: {
    type: Number,
  },
  datesReserved: {
    type: Array,
  },
});

module.exports = mongoose.model('villa', VillaSchema);

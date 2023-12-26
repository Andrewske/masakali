const mongoose = require('mongoose');

const VillaRatesSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
      unique: true,
    },
    surya: {
      type: Number,
      default: null,
    },
    chandra: {
      type: Number,
      default: null,
    },
    jala: {
      type: Number,
      default: null,
    },
    akasha: {
      type: Number,
      default: null,
    },
    laskshmi: {
      type: Number,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('villarates', VillaRatesSchema);

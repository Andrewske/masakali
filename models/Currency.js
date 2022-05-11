const mongoose = require('mongoose');

const CurrencySchema = new mongoose.Schema(
  {
    data: {
      type: Object,
      required: true,
    },
    baseCurrency: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('currency', CurrencySchema);

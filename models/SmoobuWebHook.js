const mongoose = require('mongoose');

const SmoobuWebHookSchema = new mongoose.Schema(
  {
    action: {
      type: String,
      unique: true,
    },
    data: {
      any: Object,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('smoobuWebHook', SmoobuWebHookSchema);

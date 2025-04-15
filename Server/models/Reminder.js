const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  title: { type: String, required: true },
  description: String,
  datetime: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Reminder', reminderSchema);

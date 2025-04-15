const express = require('express');
const router = express.Router();
const Reminder = require('../models/Reminder');

// POST /reminders
router.post('/', async (req, res) => {
  try {
    const reminder = new Reminder(req.body);
    await reminder.save();
    res.status(201).json(reminder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /reminders/:user_id
router.get('/:user_id', async (req, res) => {
  try {
    const reminders = await Reminder.find({ user_id: req.params.user_id }).sort({ datetime: 1 });
    res.json(reminders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /reminders/:id
router.delete('/:id', async (req, res) => {
  try {
    await Reminder.findByIdAndDelete(req.params.id);
    res.json({ message: 'Reminder deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

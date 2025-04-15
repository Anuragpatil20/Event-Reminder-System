const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // ensure .env is in same dir

const reminderRoutes = require('./routes/reminders'); // fix path

const app = express();
app.use(cors());
app.use(express.json());

app.use('/reminders', reminderRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

console.log('Connecting to MongoDB:', MONGO_URI); // for debugging

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
  });

// routes/log_in.js
const express = require('express');
const router = express.Router();
const LogIn = require('../models/log_in');

router.post('/adauga', async (req, res) => {
  try {
    const logInNou = await LogIn.create(req.body);
    res.json(logInNou);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Alte rute pentru operatii CRUD cu Log_in

module.exports = router;

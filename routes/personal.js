// routes/personal.js
const express = require('express');
const router = express.Router();
const Personal = require('../models/personal');

router.post('/adauga', async (req, res) => {
  try {
    const personalNou = await Personal.create(req.body);
    res.json(personalNou);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Alte rute pentru operatii CRUD cu Personal

module.exports = router;

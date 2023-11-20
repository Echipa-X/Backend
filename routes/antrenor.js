// routes/antrenor.js
const express = require('express');
const router = express.Router();
const Antrenor = require('../models/antrenor');

router.post('/adauga', async (req, res) => {
  try {
    const antrenorNou = await Antrenor.create(req.body);
    res.json(antrenorNou);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Alte rute pentru operatii CRUD cu Antrenor

module.exports = router;

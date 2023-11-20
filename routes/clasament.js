// routes/clasament.js
const express = require('express');
const router = express.Router();
const Clasament = require('../models/clasament');

router.post('/adauga', async (req, res) => {
  try {
    const clasamentNou = await Clasament.create(req.body);
    res.json(clasamentNou);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Alte rute pentru operatii CRUD cu Clasament

module.exports = router;

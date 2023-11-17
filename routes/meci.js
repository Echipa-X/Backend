// routes/meci.js
const express = require('express');
const router = express.Router();
const Meci = require('../models/meci');

router.post('/adauga', async (req, res) => {
  try {
    const meciNou = await Meci.create(req.body);
    res.json(meciNou);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Alte rute pentru operatii CRUD cu Meci

module.exports = router;

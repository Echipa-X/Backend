// routes/bilet.js
const express = require('express');
const router = express.Router();
const Bilet = require('../models/bilet');

router.post('/adauga', async (req, res) => {
  try {
    const biletNou = await Bilet.create(req.body);
    res.json(biletNou);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Alte rute pentru operatii CRUD cu Bilet

module.exports = router;

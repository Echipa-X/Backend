// routes/jucator.js
const express = require('express');
const router = express.Router();
const Jucator = require('../models/jucator');

// Ruta pentru obținerea tuturor jucătorilor
router.get('/', async (req, res) => {
  try {
    const jucatori = await Jucator.find();
    res.json(jucatori);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

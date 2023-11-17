// routes/echipa.js
const express = require('express');
const router = express.Router();
const Echipa = require('../models/echipa');

// Ruta pentru obținerea tuturor echipelor
router.get('/', async (req, res) => {
  try {
    const echipe = await Echipa.find();
    res.json(echipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

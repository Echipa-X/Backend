// routes/performante.js
const express = require('express');
const router = express.Router();
const Performante = require('../models/performante');

router.post('/adauga', async (req, res) => {
  try {
    const performantaNoua = await Performante.create(req.body);
    res.json(performantaNoua);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Alte rute pentru operatii CRUD cu Performante

module.exports = router;

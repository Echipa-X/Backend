// routes/stire.js
const express = require('express');
const router = express.Router();
const Stire = require('../models/stire');

router.post('/adauga', async (req, res) => {
  try {
    const stireNoua = await Stire.create(req.body);
    res.json(stireNoua);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Alte rute pentru operatii CRUD cu Stire

module.exports = router;

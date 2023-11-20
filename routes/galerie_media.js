// routes/galerie_media.js
const express = require('express');
const router = express.Router();
const GalerieMedia = require('../models/galerie_media');

router.post('/adauga', async (req, res) => {
  try {
    const mediaNoua = await GalerieMedia.create(req.body);
    res.json(mediaNoua);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Alte rute pentru operatii CRUD cu Galerie_Media

module.exports = router;

// routes/rol.js
const express = require('express');
const router = express.Router();
const Rol = require('../models/rol');

router.post('/adauga', async (req, res) => {
  try {
    const rolNou = await Rol.create(req.body);
    res.json(rolNou);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Alte rute pentru operatii CRUD cu Rol

module.exports = router;

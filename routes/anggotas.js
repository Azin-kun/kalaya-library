var express = require('express');
var router = express.Router();
const { Anggotas } = require('../models');

// GET members page
router.get('/', async function(req, res, next) {
  try {
    const anggotas = await Anggotas.findAll();
    res.render('anggotas', { anggotas });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// POST route for deleting a member
router.post('/delete/:id', async function(req, res, next) {
  try {
    const { id } = req.params;
    await Anggotas.destroy({ where: { no_anggota: id } });
    res.redirect('/anggota');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// GET route for editing a member
router.get('/edit/:id', async function(req, res, next) {
  try {
    const { id } = req.params;
    const anggota = await Anggotas.findOne({ where: { no_anggota: id } });
    res.render('editAnggota', { anggota });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// POST route for updating a member
router.post('/edit/:id', async function(req, res, next) {
  try {
    const { id } = req.params;
    const { nama_anggota, username, password, alamat, no_telp, ttl, prodi } = req.body;
    await Anggotas.update({ nama_anggota, username, password, alamat, no_telp, ttl, prodi }, { where: { no_anggota: id } });
    res.redirect('/anggota');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;

var express = require('express');
var router = express.Router();
const { Bukus } = require('../models');

// GET books page
router.get('/', async function(req, res, next) {
  try {
    const bukus = await Bukus.findAll();
    res.render('books', { bukus });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// POST route for deleting a book
router.post('/delete/:id', async function(req, res, next) {
  try {
    const { id } = req.params;
    await Bukus.destroy({ where: { kode_buku: id } });
    res.redirect('/books');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// GET route for editing a book
router.get('/edit/:id', async function(req, res, next) {
  try {
    const { id } = req.params;
    const book = await Bukus.findOne({ where: { kode_buku: id } });
    res.render('editBook', { book });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// POST route for updating a book
router.post('/edit/:id', async function(req, res, next) {
  try {
    const { id } = req.params;
    const { judul_buku, pengarang, kategori, penerbit, tahun_terbit } = req.body;
    await Bukus.update({ judul_buku, pengarang, kategori, penerbit, tahun_terbit }, { where: { kode_buku: id } });
    res.redirect('/books');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;

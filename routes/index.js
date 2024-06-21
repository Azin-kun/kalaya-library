var express = require('express');
var router = express.Router();
var verifyToken = require('./middlewares/verifyToken');

const { Bukus, Anggotas, Pinjams } = require('../models');
/* GET home page. */
router.get('/', verifyToken, async function(req, res, next) {
  try {
    const bukus = await Bukus.findAll(); // Fetch all books from the database
    const bukusCount = await Bukus.count();
    const anggotasCount = await Anggotas.count();
    const pinjamsCount = await Pinjams.count();

    res.render('index', {
      petugasName: req.session.petugasName || 'Guest',
      bukusCount,
      anggotasCount,
      pinjamsCount,
      bukus // Pass the books to the view
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;

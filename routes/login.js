var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs'); // Import bcryptjs library

// Import model Petugas
const Petugas = require('../models').Petugas;

// GET request to render the login page
router.get("/", function (req, res, next) {
  res.render("login", { layout: false }); // Rendering login page without layout
});

// POST request to verify login credentials
router.post('/verifylogin', async (req, res, next) => {
  try {
    // Destructure username and password from request body
    const { username, password } = req.body;

    // Find petugas (staff member) based on the provided username
    const petugas = await Petugas.findOne({ where: { username } });

    // If petugas (staff member) is found and password matches, send success response
    if (petugas && await bcrypt.compare(password, petugas.password)) {
      // Save petugas's name in session upon successful login
      req.session.petugasName = petugas.nama_petugas;
      res.redirect('/'); // Redirect to homepage after successful login
    } else {
      // If petugas (staff member) not found or password doesn't match, send error response
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    // If any error occurs, send an error response
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

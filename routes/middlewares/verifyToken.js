var jwt = require('jsonwebtoken');
const JWT_SECRET = 'kalaya'; // Replace with your own secret key

function verifyToken(req, res, next) {
  const token = req.cookies.token; // Get token from cookies
  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to authenticate token' });
    }
    req.petugasId = decoded.id;
    req.nama_petugas = decoded.nama_petugas;
    next();
  });
}

module.exports = verifyToken;

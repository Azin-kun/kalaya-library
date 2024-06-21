const jwt = require('jsonwebtoken');
const secretKey = 'kalaya'; // Replace with your actual secret key

const verifyToken = (req, res, next) => {
  const token = req.cookies.token || ''; // Assuming the token is stored in cookies

  if (!token) {
    return res.redirect('/login');
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (err) {
    console.error('Invalid token:', err);
    return res.redirect('/login');
  }
};

module.exports = verifyToken;

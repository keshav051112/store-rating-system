const jwt = require('jsonwebtoken');

exports.authenticate = (roles = []) => (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.sendStatus(401); 
  jwt.verify(token, 'secret', (err, user) => {
    if (err) return res.sendStatus(403); 
    if (roles.length && !roles.includes(user.role)) return res.sendStatus(403); 
    req.user = user;
    next();
  });
};
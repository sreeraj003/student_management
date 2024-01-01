const { sign, verify } = require("jsonwebtoken");

const createToken = (user) => {
  const accessToken = sign({ _id: user }, process.env.JWT_SECRET);
  return accessToken;
};

const validateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  if (authHeader) {
    const token = authHeader
    verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.json("unauthorized");
      } else {
        req._id = decoded;
        next();
      }
    });
  } else {
    res.json("unauthorized");
  }
};

module.exports = {
  createToken,
  validateToken,
};

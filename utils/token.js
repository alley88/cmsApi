const jwt = require("jsonwebtoken");
const secret = "Alley"
const getToken = (userInfo)=>{
  return jwt.sign(userInfo, secret);
}

const verifyToken = (token)=>{
    return jwt.verify(token, secret);
}

module.exports = {
    getToken,
    verifyToken
}
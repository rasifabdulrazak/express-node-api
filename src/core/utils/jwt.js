const jwt = require('jsonwebtoken');


const generateJWTToken = (user) => {
    const payload = {
        userId: user.id,
        email: user.email,
    };

    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });
}

const verifyJWTToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return null;
    }
}

module.exports = {
    generateJWTToken,
    verifyJWTToken
}
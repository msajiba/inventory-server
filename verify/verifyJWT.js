const jwt = require('jsonwebtoken');
require('dotenv').config();


const verifyJwt = (req, res, next) => {
    const authHeader = req.header.authorization;
    if (!authHeader) {
        return res.status(404).send({
            message: 'UnAuthorization access'
        })
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
        if (err) {
            return res.status(403).send({
                message: 'Forbidden Access'
            })
        }
        req.decoded = decoded;
        next();

    })
};

module.exports = verifyJwt 
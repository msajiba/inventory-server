const User = require('../models/user.model');


const verifyAdmin = async (req, res, next) => {
    const requester = req.decoded.email;
    const requesterAccount = await User.findOne({
        email: requester
    });
    if (requesterAccount.role === 'admin') {
        next();
    } else {
        return res.status(403).send({
            message: 'Forbidden Access'
        })
    }
};

module.exports = verifyAdmin;
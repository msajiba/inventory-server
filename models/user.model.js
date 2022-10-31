const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },


});

module.exports = mongoose.model('users', userSchema);
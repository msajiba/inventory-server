const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('categories', categorySchema);
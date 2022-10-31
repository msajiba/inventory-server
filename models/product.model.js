const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    sku: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('products', productSchema);
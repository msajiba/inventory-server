const express = require('express');
const {
    getAllProduct,
    createProduct,
    deleteProduct,
    productCounter
} = require('../controllers/product.controller');

const router = express.Router();

router.get('/', getAllProduct);
router.get('/product-counter', productCounter )
router.post('/', createProduct);
router.delete('/:id', deleteProduct)

module.exports = router;
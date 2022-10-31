const express = require('express');
const {
    getAllProduct,
    createProduct,
    deleteProduct
} = require('../controllers/product.controller');

const router = express.Router();

router.get('/', getAllProduct);
router.post('/', createProduct);
router.delete('/:id', deleteProduct)

module.exports = router;
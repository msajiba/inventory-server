const express = require('express');
const {
    getAllProduct,
    createProduct,
    deleteProduct,
    getSingleProduct,
    getCountProduct
} = require('../controllers/product.controller');

const router = express.Router();

router.get('/', getAllProduct);
router.get('/product-count', getCountProduct)
router.get('/:id', getSingleProduct);
router.post('/', createProduct);
router.delete('/:id', deleteProduct)

module.exports = router;
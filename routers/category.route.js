const express = require('express');
const {
    createCategory,
    getAllCategory,
    deleteCategory
} = require('../controllers/category.controller');

const router = express.Router();

router.get('/', getAllCategory);
router.post('/', createCategory);
router.delete('/:id', deleteCategory);

module.exports = router;
const express = require('express');
const {
    getAllUser, createUser, loginUser, deleteUser
} = require('../controllers/user.controller');

const router = express.Router();

router.get('/', getAllUser);
router.post('/', createUser);
router.delete('/:id', deleteUser)
router.post('/login', loginUser)

module.exports = router;
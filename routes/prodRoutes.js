const express = require('express');
const router = express.Router();
const prodController = require('../controllers/prodController');
const { authenticateUser } = require('../middlewares/auMid');

router.post('/', authenticateUser, prodController.createProduct);

router.get('/', prodController.getAllProducts);
router.get('/:id', prodController.getProduct);

module.exports = router;

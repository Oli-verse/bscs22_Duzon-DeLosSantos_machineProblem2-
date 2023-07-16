const express = require('express');
const router = express.Router();
const ordController = require('../controllers/ordController');
const { authenticateUser } = require('../middlewares/auMid');

router.post('/', authenticateUser, ordController.createOrder);

router.get('/', authenticateUser, ordController.getAllOrders);


module.exports = router;

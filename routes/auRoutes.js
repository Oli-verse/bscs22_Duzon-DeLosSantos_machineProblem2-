const express = require('express');
const router = express.Router();
const auController = require('../controllers/auController');
const { authenticateUser } = require('../middlewares/auMid');

router.post('/register', auController.registerUser);

router.post('/login', auController.loginUser);

router.get('/profile', (req, res) => {
  authenticateUser(req, res, () => {
  return res.status(200).json(req.user);
  }) 
  
});
  
module.exports = router;

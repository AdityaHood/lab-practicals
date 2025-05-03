const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')


router.post('/register',userController.registerUser)
router.post('/login',userController.loginUser)
router.get('/profile/:id',userController.displayUser)
router.get('/update/:id',userController.updateUser)

module.exports = router;

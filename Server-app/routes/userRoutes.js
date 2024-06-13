const express = require('express')
const { registerUser,loginUser } = require('../controllers/userController')
const validateToken = require('../middleware/validateTokenHandler') //since user info is private route so we will use this authentication here
const router= express.Router()

router.post('/signup',registerUser)
router.post('/login',loginUser)



module.exports = router
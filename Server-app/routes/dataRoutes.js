const express = require('express')
const { getMenuData } = require('../controllers/dataController')

const router= express.Router()

router.post('/menudata', getMenuData)


module.exports = router
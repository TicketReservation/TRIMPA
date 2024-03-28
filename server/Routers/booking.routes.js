const express = require('express')
const { selectAll, register }  = require('../controller/BookingController')

const router = express.Router()

// Define your routes here
router.get('/', selectAll)
router.post('/register', register)

module.exports = router

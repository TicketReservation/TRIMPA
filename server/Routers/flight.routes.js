const express = require('express')
const router = express.Router()
const {selectAll,addOne,updateOne,deleteOne} = require('../controller/FlightController')



// Define your routes here
router.get('/', selectAll)
router.post('/newFlight', addOne)
router.put('/:id',updateOne)
router.delete('/:id', deleteOne)

module.exports = router
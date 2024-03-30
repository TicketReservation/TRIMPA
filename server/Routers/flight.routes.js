const express = require('express')
const router = express.Router()
const {selectAll,addOne,updateOne,deleteOne, Select} = require('../controller/FlightController')




router.get('/:destination/:departure', Select)
router.get('/', selectAll)
router.post('/newFlight', addOne)
router.put('/:id',updateOne)
router.delete('/:id', deleteOne)

module.exports = router
<<<<<<< HEAD
// const express = require('express')
// const router = express.Router()
// const {selectAll,addOne,updateOne,deleteOne} = require('../controller/FlightController')



// // Define your routes here
// router.get('/', selectAll)
// router.post('/newFlight', addOne)
// router.put('/:id',updateOne)
// router.delete('/:id', deleteOne)
=======
const express = require('express')
const router = express.Router()
const {selectAll,addOne,updateOne,deleteOne, Select} = require('../controller/FlightController')




router.get('/:destination/:departure', Select)
router.get('/', selectAll)
router.post('/newFlight', addOne)
router.put('/:id',updateOne)
router.delete('/:id', deleteOne)
>>>>>>> 2341628c33cb6db0e83bfe5e283a184bfd223bd4

// module.exports = router
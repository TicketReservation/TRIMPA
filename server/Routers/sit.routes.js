<<<<<<< HEAD
const express = require('express');
const { getAll, deleteOne , addOne ,updateOne, getOne} = require('../controller/SitController');
=======
const express = require('express')
const { getAll, deleteOne } = require('../controller/SitController')
>>>>>>> 1afb5628a833c4d0c96f4aad970c52ef49d6143e

const router = express.Router()

// Define your routes here
<<<<<<< HEAD
router.get('/', getAll);
router.get('/:name', getOne);
router.post('/',addOne)
router.put('/:name',updateOne)
router.delete('/:id', deleteOne);
=======
router.get('/', getAll)
router.delete('/:id', deleteOne)
>>>>>>> 1afb5628a833c4d0c96f4aad970c52ef49d6143e

module.exports = router

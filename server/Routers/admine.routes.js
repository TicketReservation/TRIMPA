const express = require ('express')
const router = express.Router()

const adminController = require('../controller/adminController');

router.post('/login', adminController.login);
router.post('/signup', adminController.signup);
router.get('/:id', adminController.getOne);
router.get('/get', adminController.getAll);
router.put('/:id', adminController.updateOne);
router.delete('/:id', adminController.deleteOne);
router.post('/add', adminController.addOne);

module.exports = router;


module.exports=router;
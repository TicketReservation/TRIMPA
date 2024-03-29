const express = require('express');
const { Add } = require('../controller/PaymentController')
const router=express.Router()


router.get('/add',Add)

module.exports=router
const express = require('express')
const Routes = express.Router();
const {Add,Verify}=require('../controller/payment');

Routes.post('/Pay',Add);
Routes.post('/Pay/:id',Verify)
module.exports= Routes ;  
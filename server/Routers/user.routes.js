
const express = require("express");
const router = express.Router();


const {getAll,register,login,updateOne,addOne}=require('../controller/UserController');



router.get("/",getAll);
router.post("/register",register);
router.post("/login",login)
router.put("/:name",updateOne)
router.post("/",addOne)


module.exports = router
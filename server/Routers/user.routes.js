
const express = require("express");
const router = express.Router();
const {getAll,register,deleteOne,login,getOne,updateOne}=require('../controller/UserController')

router.get("/",getAll);
router.get('/:id',getOne)
router.post("/register",register);
router.post("/login",login)
router.delete("/:id",deleteOne);
router.put("/:id",updateOne)


module.exports = router
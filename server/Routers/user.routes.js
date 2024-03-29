
const express = require("express");
const router = express.Router();
const {getAll,register,deleteOne,login}=require('../controller/UserController')

router.get("/",getAll);
router.post("/register",register);
router.post("/login",login)
router.delete("/del/:id",deleteOne);


module.exports = router
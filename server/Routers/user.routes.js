const express = require("express");
const router = express.Router();


const {getAll,register,deleteOne,login,updateOne,addOne}=require('../controller/UserController');




router.get("/",getAll);


router.post("/register",register);
router.post("/login",login)
router.delete("/del/:id",deleteOne);
router.put("/:name",updateOne)
router.post("/",addOne)

module.exports = router;
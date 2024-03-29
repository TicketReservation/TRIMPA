<<<<<<< HEAD
=======

>>>>>>> f551160b7d2d0545df30b81d4e49dcc3de98e5d6
const express = require("express");
const router = express.Router();
const {getAll,register,deleteOne,login}=require('../controller/UserController')

router.get("/",getAll);
router.post("/register",register);
router.post("/login",login)
router.delete("/del/:id",deleteOne);
<<<<<<< HEAD
=======

>>>>>>> f551160b7d2d0545df30b81d4e49dcc3de98e5d6


module.exports = router
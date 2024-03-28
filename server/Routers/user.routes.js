<<<<<<< HEAD
const express = require("express")
const router = express.Router()
const {getAll,register,deleteOne}=require('../controller/UserController')

router.get("/",getAll)
router.post("/register",register)
router.delete("/del/:id",deleteOne)
=======
const express = require("express");
const router = express.Router();
const {getAll,register,deleteOne,login,UpdateOne}=require('../controller/UserController')

router.get("/",getAll);


router.post("/register",register);
router.post("/login",login)
router.delete("/del/:id",deleteOne);
>>>>>>> 6a2ea6a97dc321d1d9b7d1b63f9c39cad319c241


module.exports = router
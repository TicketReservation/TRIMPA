const express = require("express");
const router = express.Router();
const {getAll,register,deleteOne}=require('../controller/UserController')

router.get("/",getAll);
router.post("/register",register);
router.delete("/login",deleteOne);
router.delete("/del/:id",deleteOne);


module.exports = router;
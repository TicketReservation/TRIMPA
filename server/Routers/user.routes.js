
const express = require("express");
const router = express.Router();
const {getAll,register,remove,login}=require('../controller/UserController')

router.get("/",getAll);
router.post("/register",register);
router.post("/login",login)
router.delete("/del/:id",remove);


module.exports = router
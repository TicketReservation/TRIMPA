const express = require("express");
const router = express.Router();
const {getAll,register,deleteOne,UpdateOne}=require('../controller/UserController')

router.get("/",getAll);
router.put("/update",UpdateOne);

router.post("/register",register);
router.delete("/del/:id",deleteOne);


module.exports = router;
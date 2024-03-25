const express = require("express");
const router = express.Router();

<<<<<<< HEAD

const {getAll,register,login,updateOne,}=require('../controllers/user.controller')
=======
const {getAll,register,deleteOne,updateOne,}=require('../controllers/indexUserRoutes')
>>>>>>> a6e21a90e5ca1b2121c8a5215b4c8734411ac16e



router.get("/",getAll);
router.post("/register",register);
router.delete("/login",deleteOne);
router.patch("/:id",updateOne);








module.exports = router;

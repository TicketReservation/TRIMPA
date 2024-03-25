const express = require("express");
const router = express.Router();

const {getAll,register,login,updateOne,}=require('../controllers/indexUserRoutes')



router.get("/",getAll);
router.post("/register",register);
router.post("/login",login);
router.patch("/:id",updateOne);








module.exports = router;

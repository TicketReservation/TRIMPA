const router = require('express').Router();


const {getAll,register,login,updateOne,}=require('')



router.get("/",getAll);
router.post("/register",register);
router.post("/login",login);
router.patch("/:id",updateOne);








module.exports = router;

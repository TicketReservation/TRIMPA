
const express = require("express");
const router = express.Router();
<<<<<<< HEAD


const {getAll,register,deleteOne,login,updateOne,addOne}=require('../controller/UserController');



=======
const {getAll,register,remove,login}=require('../controller/UserController')
>>>>>>> 1afb5628a833c4d0c96f4aad970c52ef49d6143e

router.get("/",getAll);
router.post("/register",register);
router.post("/login",login)
<<<<<<< HEAD
router.delete("/del/:id",deleteOne);
router.put("/:name",updateOne)
router.post("/",addOne)
=======
router.delete("/del/:id",remove);

>>>>>>> 1afb5628a833c4d0c96f4aad970c52ef49d6143e

module.exports = router
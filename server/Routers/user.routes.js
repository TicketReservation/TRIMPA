
const express = require("express");
const router = express.Router();
const {getAll,register,deleteOne,login,updateOne,getOne,updateOOne,deeleteOne,addOne,remove}=require('../controller/UserController')

router.get('/',getAll)
router.get('/:id',getOne)
router.post("/register",register);
router.post("/login",login)
router.delete("/:id",remove);
router.put("/:id",updateOOne)



router.delete("/:id",deeleteOne);
router.put("/:id",updateOOne)
router.delete("/del/:id",deleteOne)
router.put("/:name",updateOne)
router.post("/",addOne)

module.exports = router
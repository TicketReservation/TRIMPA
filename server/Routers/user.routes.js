<<<<<<< HEAD

// <<<<<<< HEAD
// const express = require("express")
// const router = express.Router()
// const {getAll,register,deleteOne}=require('../controller/UserController')

// router.get("/",getAll)
// router.post("/register",register)
// router.delete("/del/:id",deleteOne)
// =======
// const express = require("express");
// const router = express.Router();
// const {getAll,register,deleteOne,login,UpdateOne}=require('../controller/UserController')

// router.get("/",getAll);


// router.post("/register",register);
// router.post("/login",login)
// router.delete("/del/:id",deleteOne);
// >>>>>>> 6a2ea6a97dc321d1d9b7d1b63f9c39cad319c241


const express = require("express");
const router = express.Router();


const {getAll,register,login,updateOne,addOne,adminLogin}=require('../controller/UserController');


=======
const express = require("express");
const router = express.Router();
const {getAll,register,deleteOne,login,updateOne,getOne,updateOOne,deeleteOne,addOne}=require('../controller/UserController')
>>>>>>> b949f90d42aff9e80b9b4d3eeb86efa0dc582ec9

router.get("/",getAll);
router.get('/:id',getOne)
router.post("/register",register);
router.post("/login",login)



router.delete("/:id",deeleteOne);
router.put("/:id",updateOOne)
router.delete("/del/:id",deleteOne)
router.put("/:name",updateOne)
router.post("/",addOne)
router.post('/admin/login',adminLogin);



module.exports = router
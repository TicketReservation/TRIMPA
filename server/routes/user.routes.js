const express = require("express");
const router = express.Router();

const {getAll,register,deleteOne,updateOne,}=require('../controllers/indexUserRoutes')



router.get("/",getAll);
router.post("/",register);
router.delete("/:id",deleteOne);
router.patch("/:id",updateOne);








module.exports = router;

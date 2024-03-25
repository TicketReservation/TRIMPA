const express = require("express");
const router = express.Router();



const {selectAll,selectOne,addOne,deleteOne,UpdateOne}=require('')



router.get("/",selectAll);
router.get("/:id",selectOne);
router.post("/",addOne);
router.delete("/:id",deleteOne);
router.patch("/:id",UpdateOne);


module.exports = router;

const express = require("express");
const router = express.Router();



const {selectAll,addOne,deleteOne,UpdateOne}=require('./../controllers/indexTravel')



router.get("/",selectAll);
router.post("/",addOne);
router.delete("/:id",deleteOne);
router.put("/:id",UpdateOne);


module.exports = router;

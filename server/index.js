const express = require("express");



const db = require('./model-mysql/index');
const app = express()

const TravelRoutes=require("")
const userRoutes = require('')


const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

 

app.use("/api/user", userRoutes);
app.use("/api/Travel", TravelRoutes);







app.listen(PORT, function () {
  console.log("listening on port 3000!");
});

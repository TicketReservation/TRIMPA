const express = require("express");

const db = require('./db/index');
const app = express()

const TravelRoutes=require('./routes/Travel.routes')
const userRoutes = require('./routes/user.routes')
const adminRoutes = require('./routes/Admin.routes')

const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/user", userRoutes);
app.use("/api/Travel", TravelRoutes);
app.use("/api/admin", adminRoutes);







app.listen(PORT, function () {
  console.log("listening on port 3000!");
});

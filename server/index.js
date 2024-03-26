const express = require("express");
let app = express();
const cors=require('cors')
const db = require ("./Database/index.js")
const UserRoute = require('./Routers/user.routes.js')






app.use(express.static(__dirname + "/../client/dist"));
app.use(express.json());
app.use(cors())
app.use('/api/user', UserRoute);




let port = 3000;


app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
const express = require("express")
let app = express()
const cors=require("cors")
// const db = require ("./Database/index.js")
const PayeRoute=require("./Routers/paye.routes.js")
require( "dotenv").config();
// const UserRoute = require('./Routers/user.routes.js')
// const FlightRoute = require('./Routers/flight.routes.js')
// const SitRoute = require('./Routers/sit.routes.js')
// const BookingRoute = require('./Routers/booking.routes.js')

const Payment=require('./Routers/Payment.Routes.js')



app.use(express.static(__dirname + "/../client/dist"))
app.use(express.json())
app.use(cors())
<<<<<<< HEAD


// app.use('/api/user', UserRoute);
// app.use('/api/flight', FlightRoute);
// app.use('/api/sit', SitRoute);
// app.use('/api/booking', BookingRoute);
app.use('/api',PayeRoute)
=======
app.use('/api/user', UserRoute);
app.use('/api/flight', FlightRoute);
app.use('/api/sit', SitRoute);
app.use('/api/booking', BookingRoute);
app.use('/api/payment', Payment);
>>>>>>> a9baaa55cfa46d47fadf75c4d91bf4fff6240369





let port = 3000


app.listen(port, function () {
  console.log(`listening on port ${port}`)
})
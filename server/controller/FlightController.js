const db = require('../Database/index')
module.exports = {

  selectAll : async (req, res) => {
    try {
        const flights = await db.Flight.findAll({})
        res.status(200).send(flights)
    } catch (error) {
        throw error
    }
},

 addOne : async (req, res) => {
    try {
        const flight = await db.Flight.create(req.body)
        res.status(201).send(flight)
    } catch (error) {
        throw error
    }
},

 updateOne : async (req, res) => {
    try {
        await db.Flight.update(req.body, {
            where: { id: req.params.id },
        })
        res.status(201).send("Flight updated successfully")
    } catch (error) {
        throw error
    }
},

 deleteOne : async (req, res) => {
    try {
        await db.Flight.destroy({ where: { id: req.params.id } })
        res.sendStatus(201)
    } catch (error) {
        throw error
    }
}
}

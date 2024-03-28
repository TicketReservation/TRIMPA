const db = require('../Database/index')

module.exports = {

    selectAll : async (req, res) => {
        try {
            const bookings = await db.Booking.findAll({})
            res.status(200).send(bookings)
        } catch (error) {
            throw error
        }
    },

    register: async (req, res) => {
        try {
          const booking = await db.Booking.create(req.body)
  
          res.status(201).send(booking)
        } catch (error) {
          throw error
        }
    },
}

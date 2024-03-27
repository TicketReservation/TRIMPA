const db = require('../Database/index')

module.exports = {
    getAll: async (req, res) => {
        try {
            const sits = await db.Sit.findAll({})
            res.status(200).send(sits)
        } catch (error) {
            throw error
        }
    },
    deleteOne: async (req, res) => {
        try {
            await db.Sit.destroy({ where: { id: req.params.id } })
            res.sendStatus(201)
        } catch (error) {
            throw error
        }
    }
}

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
    getOne : async function (req, res) {
        try {
            const getone = await db.Sit.findOne( {
                where: { name: req.params.name },
            })
            res.status(200).json(getone)
        } catch (error) {
            throw error
        }
        
    },
 
    addOne : async (req, res) => {
        try {
            const post = await db.Sit.create(req.body)
            res.status(201).send(post)
        } catch (error) {
            throw error
        }
    },
    updateOne : async (req, res) => {
        try {
            await db.Sit.update(req.body, {
                where: { name: req.params.name },
            })
            res.status(201).send("Flight updated successfully")
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

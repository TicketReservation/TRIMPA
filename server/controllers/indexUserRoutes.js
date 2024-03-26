const db = require('../db/index')
module.exports = {
    getAll: async (req, res) => {
      try {
        const user = await db.User.findAll({});
        res.status(200).send(user);
      } catch (error) {
        throw error;
      }
    },
    register: async (req, res) => {
      try {
        const user = await db.User.create(req.body);

        res.status(201).send(user);
      } catch (error) {
        throw error;
      }
    },
    updateOne: async (req, res) => {
      try {
        const user = await db.User.update(req.body, {
          where: { id: req.params.id },
        });
        res.status(201).send(user);
      } catch (error) {
        throw error;
      }
    },
    deleteOne: async (req, res) => {
      try {
        const user = await db.User.destroy({where: { id: req.params.id }});
        res.sendStatus(200);
       
        }
       
      catch (error) {
        throw error;
      }
    }
  };
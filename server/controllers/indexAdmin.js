const db = require('../db/index')
module.exports = {
    selectAll: async (req, res) => {
      try {
        const admin = await db.Admin.findAll({});
        res.status(200).send(admin);
      } catch (error) {
        throw error;
      }
    },
    addOne: async (req, res) => {
      try {
        const admin = await db.Admin.create(req.body);
        res.status(201).send(admin);
      } catch (error) {
        throw error;
      }
    },
    UpdateOne: async (req, res) => {
      try {
        const admin = await db.Admin.update(req.body, {
          where: { id: req.params.id },
        });
        res.status(201).send(admin);
      } catch (error) {
        throw error;
      }
    },
    deleteOne: async (req, res) => {
      try {
        let id = req.params.id;
        const admin = await db.Admin.destroy({
          where: { id: id },
        });
        res.status(200).send(admin);
        }
       
      catch (error) {
        throw error;
      }
    }
  };
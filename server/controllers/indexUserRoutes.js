const db = require('../db/index')
module.exports = {
    getAll: async (req, res) => {
      try {
        const product = await db.Product.findAll({});
        res.status(200).send(product);
      } catch (error) {
        throw error;
      }
    },
    register: async (req, res) => {
      try {
        const product = await db.Product.create(req.body);
        res.status(201).send(product);
      } catch (error) {
        throw error;
      }
    },
    updateOne: async (req, res) => {
      try {
        const product = await db.Product.update(req.body, {
          where: { id: req.params.id },
        });
        res.status(201).send(product);
      } catch (error) {
        throw error;
      }
    },
    deleteOne: async (req, res) => {
      try {
       
        }
       
      catch (error) {
        throw error;
      }
    }
  };
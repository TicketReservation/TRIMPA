const db = require('../db/index')
module.exports = {
    selectAll: async (req, res) => {
      try {
        const product = await db.Product.findAll({});
        res.status(200).send(product);
      } catch (error) {
        throw error;
      }
    },
    addOne: async (req, res) => {
      try {
        const product = await db.Product.create(req.body);
        res.status(201).send(product);
      } catch (error) {
        throw error;
      }
    },
    UpdateOne: async (req, res) => {
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
module.exports = {
    selectAll: async (req, res) => {
      try {
        const product = await db.Product.findAll({});
        res.status(200).send(product);
        const travel = await db.Travel.findAll({});
        res.status(200).send(travel);
      } catch (error) {
        throw error;
      }
    },
    addOne: async (req, res) => {
      try {
        const product = await db.Product.create(req.body);
        res.status(201).send(product);
        const travel = await db.Travel.create(req.body);
        res.status(201).send(travel);
      } catch (error) {
        throw error;
      }
    },
    UpdateOne: async (req, res) => {
      try {
        const travel = await db.Travel.update(req.body, {
          where: { id: req.params.id },
        });
        res.status(201).send(product);
        res.status(201).send(travel);
      } catch (error) {
        throw error;
      }
    },
    deleteOne: async (req, res) => {
      try {

        const travel = await db.Travel.delete({where: { id: req.params.id }});
        res.status(201).send(travel);

        }

      catch (error) {
        throw error;
      }
    }
}

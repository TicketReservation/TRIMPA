const db = require('../Database/index')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = {
    getAll: async (req, res) => {
      try {
        const user = await db.User.findAll({})
        res.status(200).send(user)
      } catch (error) {
        throw error
      }
    },


    

    register: async (req, res) => {
      const{Name,email,password,picture}=req.body
      const hashedPassword =  await bcrypt.hash(password, 10);
      try {
        
        const user=  db.User.create({Name,email,password:hashedPassword,picture})
      
        res.status(201).json(user);
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Registration failed' })

      }
    },

    getOne: async (req, res) => {
      try {
        const user = await db.User.findOne({ where: { id: req.params.id } });
        res.json(user);
      } catch (error) {
        throw error;
      }
    },

    login: async (req, res) => {
      try {
        const { email, password } = req.body;
        const user = await db.User.findOne({ where: { email } });
        
        if (!user) {
          return res.status(401).json({ error: 'Invalid user' });
        }
    
        const correctPass = await bcrypt.compare(password, user.password);
        if (!correctPass) {
          return res.status(401).json({ error: 'Wrong password' });
        }
    
        const token = jwt.sign({ id: user.id }, "mlop09", { expiresIn: "1h" });
        res.status(200).json({ token });
      } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    },


      deleteOne: async (req, res) => {
      try {
        const user = await db.User.destroy({where: { id: req.params.id }})
        res.json(user)

        }
        catch (error) {
        throw error
    }
},
  updateOne:async(req,res)=>{
    try {
      const user=await db.User.update({where:{id:req.params.id}})
      res.json(user)
    } catch (error) {
      throw error
    }
  }
}
const db = require('../Database/index')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = {
  getAll : async (req, res) => {
    try {
      const users = await db.User.findAll();
      res.status(200).json(users);
    } catch (error) {
      throw error
    }
  },
    deeleteOne:async(req,res)=>{
try {
  const _id=req.params.id
  const user=db.User.destroy({where:{id:_id}})
  res.json(user)
} catch (error) {
  throw error
}
    },
    updateOOne:async(req,res)=>{
      try {
        const _id=req.params.id
        const user=await db.User.update(req.body,{where:{id:_id}})
        res.json(user)
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


      getOne: async (req, res) => {
      try {

        const _id=req.params.id
        const user = await db.User.findOne({where:{id:_id}})

        res.json(user)

        }
        catch (error) {
        throw error
    }
},

  updateOOne:async(req,res)=>{
    try {
      const user=await db.User.update({where:{id:req.params.id}})
      res.json(user)
    } catch (error) {
      throw error
    }
  },

updateOne : async (req, res) => {
  try {
      await db.User.update(req.body, {
          where: { name: req.params.name },
      })
      res.status(201).send("Flight updated successfully")
  } catch (error) {
      throw error
  }
},

addOne : async (req, res) => {
   try {
       const add = await db.User.create(req.body)
       res.status(201).send(add)
   } catch (error) {
       throw error
   }
},
deleteOne: async (req, res) => {
  try {
      await db.User.destroy({ where: { id: req.params.id } })
      res.sendStatus(201)
  } catch (error) {
      throw error
  }
}

}
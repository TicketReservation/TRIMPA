const db = require('../Database/index')
const bcrypt = require('bcrypt');
 const jwt = require('jsonwebtoken');

module.exports={
    add:async(req,res)=>{
        try {
            const {emailOrPhone,password}=req.body
            const hashedPass=await bcrypt.hash(password,10)
            const User=new User({emailOrPhone,password:hashedPass})
            await User.save()
            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Registration failed' })
        }
    }
}
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../Database/index');
const Admin = require('../Database/AdminDachbord')


async function signup(req, res) {
  const { Name, email, password } = req.body
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const admin = await db.Admin.create({ Name:Name, email:email, password: hashedPassword });
    res.status(201).json((admin));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Registration failed' });
  }
}



async function login(req, res) {
  try {
    const { email, password } = req.body;
    const admin = await db.Admin.findOne({ where: { email } });

    if (!admin) {
      return res.status(401).json({ error: 'Invalid user' });
    }

    const correctPass = await bcrypt.compare(password, admin.password);
    if (!correctPass) {
      return res.status(401).json({ error: 'Wrong password' });
    }

    const token = jwt.sign({ id: admin.id }, "mlop09", { expiresIn: "1h" });
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}







module.exports = {  login, signup };
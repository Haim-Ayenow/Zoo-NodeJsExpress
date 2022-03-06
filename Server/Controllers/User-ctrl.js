const users=require('../Models/User-Model');
const bcrypt = require(`bcrypt`);
const jwt = require('jsonwebtoken');

module.exports = {
    register: async (req, res) => {
      if (users.exists(req.body.Email) == true)
        return res.status(400).json({ message: "email already exists" });
  
      bcrypt.hash(req.body.Password, 10, async (err, hasPassword) => {
        if (err) return res.status(500).json({ message: "error" });
        req.body.Password = hasPassword;
        await users
          .create(req.body)
          .then((result) => {
            return res
              .status(200)
              .json({ massage: "user added successfully", result });
          })
          .catch((err) => res.status(500).json(err));
      });
    },
  
    login: async (req, res) => {
      if (users.exists(req.body.Email) == false)
        return res.status(400).json({ message: "email already exists" });
      try {
        const user = await users.findOne({ Email: req.body.Email });
        bcrypt.compare(req.body.Password, user.Password, (err, isMatch) => {
          if (err) return res.status(500).json({ message: "Error" });
          if (!isMatch)
            return res.status(400).json({ message: "Password incorrect" });
          const token = jwt.sign({ user }, process.env.SECRET_KEY, {
            expiresIn: "1h",
          });
          return res.status(200).json({ message: "Login successful", token });
        });
      } catch (err) {
        return res.status(500).json(err);
      }
    }, 
  };
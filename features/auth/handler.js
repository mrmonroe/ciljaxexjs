require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../users/model');
const PRODUCTION = process.env.NODE_ENV === 'production';
const signup = (req, res) => {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 13)
  }).then((user, err) => {
    if (err) {
      console.log(user);
      console.log(err);
      res.status(500).send({ message: err });
      return;
    } else {
      res.status(200).send({ message: 'Registered.' });
    }
  });
};

const signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then((user, err) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (!user) {
      res.status(403).send({ message: 'forbidden' });
    }

    const pwdIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!pwdIsValid) {
      return res
        .status(401)
        .send({ accessToken: null, message: 'Invalid Password' });
    }
    const token = jwt.sign(
      {
        id: user.id
      },
      process.env.APISECRET,
      {
        expiresIn: 86400
      }
    );

    res
      .cookie('PTLS', token, {
        httpOnly: !PRODUCTION,
        secure: PRODUCTION,
        sameSite: 'strict'
      })
      .status(200)
      .send({
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName
        },
        message: 'Login Successful',
        accessToken: token
      });
  });
};
module.exports = {
  signup,
  signin
};


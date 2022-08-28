const { sequelize } = require('../../db');
const { DataTypes } = require('sequelize');
const db = sequelize;
const emailRegEx =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const User = db.define(
  'User',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        is: emailRegEx
      },
      unique: true
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        isIn: [['coordinator', 'interpreter', 'admin']]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    paranoid: true
  }
);

function UserSync() {
  User.sync()
    .then(() => {
      console.log('New User table created');
    })
    .finally(() => {
      //db.close();
    });
}

module.exports = { User, UserSync };


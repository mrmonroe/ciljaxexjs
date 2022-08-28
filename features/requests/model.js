const { sequelize } = require('../../db');
const db = sequelize;
const { DataTypes } = require('sequelize');
const Request = db.define(
  'Request',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    clientName: DataTypes.STRING,
    sAddr: DataTypes.STRING,
    sAddrAlt: DataTypes.STRING,
    sZip: DataTypes.STRING,
    sState: DataTypes.STRING,
    sCity: DataTypes.STRING,
    sDateTimes: DataTypes.ARRAY(DataTypes.DATE),
    bizName: DataTypes.STRING,
    bcName: DataTypes.STRING,
    bcEmail: DataTypes.STRING,
    bcPhone: DataTypes.STRING,
    jobType: { type: DataTypes.STRING, defaultValue: 'Standard' },
    jobTier: { type: DataTypes.STRING, defaultValue: '1' },
    numClients: { type: DataTypes.SMALLINT, defaultValue: 1 },
    numTerpsNeeded: { type: DataTypes.SMALLINT, defaultValue: 1 },

    isAccepted: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  },
  {

    paranoid: true
  }
);

function RequestSync() {
  Request.sync()
    .then(() => {
      console.log('New Request table created');
    })
    .finally(() => {});
}

module.exports = { Request, RequestSync };

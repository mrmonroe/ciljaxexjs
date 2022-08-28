const { Request } = require('./model');

const post = (req, res) => {
  console.dir('rb: ', req.body);
  Request.create({
    clientName: req.body.clientName,
    sAddr: req.body.sAddr,
    sAddrAlt: req.body.sAddrAlt,
    sZip: req.body.sZip,
    sState: req.body.sState,
    sCity: req.body.sCity,
    sDateTimes: req.body.sDateTimes,
    bizName: req.body.bizName,
    bcName: req.body.bcName,
    bcEmail: req.body.bcEmail,
    bcPhone: req.body.bcPhone
  })
    .then((result, err) => {
      return res.json(result);
    })
    .catch((err) => {
      return res.json(err);
    });
};
/*
jobType: DataTypes.STRING,
jobTier: DataTypes.STRING,
numClients: DataTypes.SMALLINT,
numTerpsNeeded: DataTypes.SMALLINT
*/

module.exports = { post };


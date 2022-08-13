const db = require( '../../app' ).locals.db;
const { DataTypes } = require('sequelize');
const Request = db.define( 'Request',{
    clientName:     DataTypes.STRING,
    sAddr:          DataTypes.STRING,
    sAddrAlt:       DataTypes.STRING,
    sZip:           DataTypes.STRING,
    sState:         DataTypes.STRING,
    sCity:          DataTypes.STRING,
    sDateTimes:     DataTypes.ARRAY( DataTypes.DATE ),
    bizName:        DataTypes.STRING,
    bcName:         DataTypes.STRING,
    bcEmail:        DataTypes.STRING,
    bcPhone:        DataTypes.STRING,
    jobType:        DataTypes.STRING,
    jobTier:        DataTypes.STRING,
    numClients:     DataTypes.SMALLINT,
    numTerpsNeeded: DataTypes.SMALLINT,



    isAccepted: {
        type: DataTypes.BOOLEAN,
        default: false
    }
    

} );

function RequestSync() {
    Request.sync().then( () => {
        console.log( 'New Request table created' );
    } ).finally( () => {
        db.close();
    } )
    
}

module.exports = {Request, RequestSync};

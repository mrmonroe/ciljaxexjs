const db = require( '../../app' ).locals.db;
const { DataTypes } = require('sequelize');
const Request = db.define( 'Request',{
    clientName: DataTypes.STRING,
    sAddr: DataTypes.STRING,
    sAddrAlt: DataTypes.STRING,
    sZip: DataTypes.STRING,
    sState: DataTypes.STRING,
    sCity: DataTypes.STRING,
    sDateTimes: DataTypes.ARRAY( DataTypes.DATE ),
    isAccepted: {
        type: DataTypes.BOOLEAN,
        default: false
    }
    

} );

module.exports = Request.sync().then( () => {
        console.log( 'New Request table created' );
    } ).finally( () => {
        db.close();
    } )

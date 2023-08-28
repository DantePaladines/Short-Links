const { DataTypes } = require("sequelize")


module.exports = (sequelize) => {
    sequelize.define("link", {
        Original_URL : {
            type : DataTypes.STRING,
            allowNull : false
        },
        Short_URL : {
            type : DataTypes.STRING,
            unique : true
        }
    },{
        timestamps : false
    });
}
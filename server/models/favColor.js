const {sequelize} = require('../util/database')

const {DataTypes} = require('sequelize')

module.exports = {
    FavColor: sequelize.define('fav_color', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        favColor: DataTypes.STRING
    })
}
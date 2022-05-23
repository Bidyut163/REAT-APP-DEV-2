const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Appellant = sequelize.define(
    'appellant',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },

        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    { timestamps: false }
);

module.exports = Appellant;

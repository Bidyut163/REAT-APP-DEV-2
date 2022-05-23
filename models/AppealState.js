const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const AppealState = sequelize.define(
    'appealstate',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },

        appellant: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        receptionist: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },

        registrar: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },

        bench: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
    },
    { timestamps: false }
);

module.exports = AppealState;

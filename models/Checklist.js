const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Checklist = sequelize.define(
    'checklist',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },

        appeal_num: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },

        complaint_num: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },

        appellant: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        respondent: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    { timestamps: false }
);

module.exports = Checklist;

const { DataTypes } = require('sequelize');
const db = require('../db/connection');


const Participant = db.define('Participant', {
    name: {
        type: DataTypes.STRING
    },
    target_solution: {
        type: DataTypes.STRING
    },
    idea_description: {
        type: DataTypes.STRING
    },
    business_needs: {
        type: DataTypes.STRING
    },
    resources: {
        type: DataTypes.STRING
    },
    vertical: {
        type: DataTypes.STRING
    },
    filename: {
        type: DataTypes.STRING
    },
    participation_date: {
        type: DataTypes.DATE
    }
})

module.exports = Participant;
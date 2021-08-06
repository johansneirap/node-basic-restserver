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
    execution_approach: {
        type: DataTypes.STRING
    },
    filename: {
        type: DataTypes.STRING
    },
    participation_date: {
        type: DataTypes.DATE
    },
    file_url: {
        type: DataTypes.STRING
    },
    owner_filename: {
        type: DataTypes.STRING
    },
    timeline: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
})

module.exports = Participant;
const { response } = require('express');
const Participant = require('../models/participant');

const getParticipant = (req, res = response) => {
    res.json({
        msg: 'get API from controller'
    });
}

const postParticipant = (req, res = response) => {
    const body = req.body;
    console.log(req.files);
    res.json({
        msg: 'post API from controller',
        body
    });
}

const getParticipants = async(req, res = response) => {
    const participants = await Participant.findAll();
    res.json(participants);
}

const putParticipant = (req, res = response) => {
    res.json({
        msg: 'put API from controller'
    });
}

const deleteParticipant = (req, res = response) => {
    res.json({
        msg: 'delete API from controller'
    });
}

module.exports = {
    getParticipant,
    postParticipant,
    getParticipants,
    putParticipant,
    deleteParticipant
}
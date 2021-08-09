const { parse } = require('dotenv');
const path = require('path');
const { fileUpload } = require('../helpers/upload-file');
const { response } = require('express');
const Participant = require('../models/participant');

const getParticipant = async(req, res = response) => {
    const { id } = req.params;
    const participant = await Participant.findByPk(id);
    if (participant) {
        res.json(participant);
    } else {
        res.json({
            msg: `Doesn't exists participant with id ${id}`
        });
    }
}

const postParticipant = async(req, res = response) => {
    // const participant = JSON.parse(req.body.participant);
    const files = req.files;
    // if (!req.files || Object.keys(req.files).length === 0) {
    //     res.status(400).json({ error: 'No files were uploaded.' });
    //     return;
    // }
    if (!files || Object.keys(req.files).length === 0) {
        try {
            const participant = new Participant(JSON.parse(req.body.participant));
            await participant.save();
            res.json({
                msg: 'Participant registered successfully',
                participant
            });
        } catch (msg) {
            res.status(400).json({ msg: 'review the data structure' });
        }
        return;
    }

    try {
        console.log(JSON.parse(req.body.participant));
        const participant = new Participant(JSON.parse(req.body.participant));
        const finalFileName = await fileUpload(files);
        const urlPathFile = `localhost:3000/uploads/${finalFileName}`;
        participant.filename = finalFileName;
        participant.file_url = urlPathFile;
        participant.owner_filename = files.file.name;
        await participant.save();
        res.json({
            msg: 'Participant registered successfully',
            participant,
            ...files,
            filename_onserver: finalFileName,
            url: urlPathFile
        });
    } catch (msg) {
        res.status(400).json({ msg: 'doesnt run' })
    }


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
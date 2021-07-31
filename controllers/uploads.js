const path = require('path');
const { response } = require('express');
const { fileUpload } = require('../helpers/upload-file');
const fs = require('fs');

const uploadFile = async(req, res = response) => {

    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).json({ error: 'No files were uploaded.' });
        return;
    }

    try {
        const finalName = await fileUpload(req.files);
        res.json({
            name: finalName
        })
    } catch (msg) {
        res.status(400).json({ msg })
    }


}

const serveFiles = (req, res = response) => {
    const { filename } = req.params;

    //search for pathname and file name and validate first


    const pathFile = path.join(__dirname, '../uploads/', filename);
    if (fs.existsSync(pathFile)) {
        return res.sendFile(pathFile);
    }

    res.json({
        msg: 'File not found'
    })
}

module.exports = {
    uploadFile,
    serveFiles
}
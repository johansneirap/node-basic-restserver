const path = require('path');
const { response } = require('express');

const uploadFile = (req, res = response) => {

    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).json({ error: 'No files were uploaded.' });
        return;
    }

    console.log('req.files >>>', req.files); // eslint-disable-line

    const { sampleFile } = req.files;

    const uploadPath = path.join(__dirname, '../uploads/', sampleFile.name);

    sampleFile.mv(uploadPath, function(err) {
        if (err) {
            return res.status(500).json({ err });
        }

        res.json({ msg: 'File uploaded to ' + uploadPath });
    });
}

module.exports = {
    uploadFile
}
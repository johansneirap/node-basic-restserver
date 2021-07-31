const path = require('path');
const { v4: uuidv4 } = require('uuid');

const fileUpload = (files, validExtension = ['pdf', 'ppt', 'excel', 'csv']) => {

    return new Promise((resolve, reject) => {

        const { sampleFile } = files;

        const nameSplitted = sampleFile.name.split('.');
        const extension = nameSplitted[nameSplitted.length - 1];

        if (!validExtension.includes(extension)) {
            return reject(`Extension '.${extension}' is not allowed`);
        }

        const tempName = `${uuidv4()}.${extension}`;

        const uploadPath = path.join(__dirname, '../uploads/', tempName);

        sampleFile.mv(uploadPath, function(err) {
            if (err) {
                return reject(err);
            }

            resolve(tempName);
        });
    })

}




module.exports = {
    fileUpload
}
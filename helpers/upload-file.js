const path = require('path');
const { v4: uuidv4 } = require('uuid');

const fileUpload = (files, validExtension = ['pdf', 'ppt', 'excel', 'xlsx', 'xls', 'pptx', 'csv']) => {

    return new Promise((resolve, reject) => {

        const { file } = files;
        const nameSplitted = file.name.split('.');
        const extension = nameSplitted[nameSplitted.length - 1].toLowerCase();

        if (!validExtension.includes(extension)) {
            return reject(`Extension '.${extension}' is not allowed`);
        }

        const tempName = `${uuidv4()}.${extension}`;

        const uploadPath = path.join(__dirname, '../uploads/', tempName);

        file.mv(uploadPath, function(err) {
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
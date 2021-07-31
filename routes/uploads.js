const { Router } = require('express');
const { uploadFile, serveFiles } = require('../controllers/uploads');



const router = Router();

router.post('/', uploadFile);

router.get('/:filename', serveFiles);

module.exports = router;
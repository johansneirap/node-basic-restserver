const { Router } = require('express');
const { getParticipant, getParticipants, postParticipant, putParticipant, deleteParticipant } = require('../controllers/participants');

const router = Router();

router.get('/:id', getParticipant);

router.get('/', getParticipants);

router.post('/', postParticipant);

router.post('/test', (req, res) => {
    console.log(req.body);
    res.json({ msg: req.body, file: req.files });
})

router.put('/', putParticipant);

router.delete('/', deleteParticipant);





module.exports = router;
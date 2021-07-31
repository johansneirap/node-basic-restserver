const { Router } = require('express');
const { getParticipant, getParticipants, postParticipant, putParticipant, deleteParticipant } = require('../controllers/participants');

const router = Router();

router.get('/', getParticipant);

router.get('/all', getParticipants);

router.post('/', postParticipant);

router.put('/', putParticipant);

router.delete('/', deleteParticipant);





module.exports = router;
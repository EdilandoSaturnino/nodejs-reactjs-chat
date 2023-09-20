const express = require('express');
const router = express.Router();
const { authenticate, sendMessage, getMessages } = require('../controllers/controllers.js');

router.post('/authenticate', authenticate);
router.post('/send', sendMessage);
router.get('/messages', getMessages);

module.exports = router;

const express = require('express');

const data = require('../controllers/professional');

const router = express.Router();

router.get('/', data.getIndex);
router.get('/professional', data.getProfessional);
module.exports = router;
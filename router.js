const express = require('express');
const router = express.Router();
const { Save } = require('./server');

router.post('/analog', Save);


module.exports = router;

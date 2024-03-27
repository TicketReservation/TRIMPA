const express = require('express');
const { add } = require('../controller/signIn');
const router = express.Router();


router.post('/', add);

module.exports = router;

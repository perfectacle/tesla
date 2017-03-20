'use strict';
const router = require('express').Router();

router.get('/login', (req, res) => res.json({success: true}));

module.exports = router;
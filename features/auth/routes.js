const express = require('express');
const router = express.Router();

const { signup, signin } = require('./handler');

router.post('/auth/register', signup, (req, res) => {});

router.post('/auth/login', signin, (req, res) => {});

module.exports = router;


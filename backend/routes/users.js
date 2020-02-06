const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    res.send('user home');
});

router.route('/add').get((req, res) => {
    res.send('user add');
});

module.exports = router;
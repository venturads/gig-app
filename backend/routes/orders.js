const router = require('express').Router();
let Order = require('../models/order.model');

router.route('/').get((req, res) => {
    res.send('user home');
});

router.route('add').get((req, res) => {
    res.send('orders add');
});

module.exports = router;
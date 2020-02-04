const router = require('express').Router();
let User = require('../models/order.model'); 

router.route('/').get((req, res) => {
    res.send('hello orders');
});

router.route('/add').get((req, res) =>{
    res.send('add orders');
});

module.exports = router; 
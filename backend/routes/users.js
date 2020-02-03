const router = require('express').Router();
let User = require('../models/user.model'); 

router.route('/').get((req, res) => {
    res.send('hello users');
});

router.route('/add').get((req, res) =>{

});

module.exports = router; 
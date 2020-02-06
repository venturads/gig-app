const router = require('express').Router();

router.route('/').get((req, res) => {
    res.send('login page');
})

module.exports = router;
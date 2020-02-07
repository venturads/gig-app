const router = require('express').Router();

router.route('/').get((req, res) => {
    res.send('register page');
})

module.exports = router;
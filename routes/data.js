var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send(changeData(require('../data/data.json')));
});

function changeData(data) {
    return data.slice(data.length - 6, data.length)
}

module.exports = router;
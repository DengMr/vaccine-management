var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var data = require('../data/data.json')
    res.render('index', {
        title: '疫苗管理系统',
        nowData: data[data.length - 1]
    });
});

module.exports = router;
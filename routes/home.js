var express = require('express');
var router = express.Router();
var db = require('../data/db');
const moment = require('moment')

router.get('/', function (req, res, next) {
    var hours = new Date().getHours().toString(),
        today = moment().format('YYYY-MM-DD'),
        dataList = db.list,
        dataListLast = dataList[dataList.length - 1],
        data = {
            date: today,
            hours: hours,
            T: req.query.num
        },
        success = false,
        error = false

    if (isIntNum(data.T)) {
        db.update(dataList.length - 1, data)
        console.log('通过HOME页更新数据');
        dataList = db.list
        dataListLast = dataList[dataList.length - 1]
        success = true
        error = false
    } else if (data.T && !isIntNum(data.T)) {
        success = false
        error = true
        console.log('提交的数值类型不正确');
    } else {
        console.log('进入HOME页但未更新数据');
    }

    res.render('home', {
        title: 'HOME',
        nowData: dataListLast,
        success: success,
        error: error
    });
});

function isIntNum(val) {
    var regPos = /^\d+$/; // 非负整数
    var regNeg = /^\-[1-9][0-9]*$/; // 负整数
    if (regPos.test(val) || regNeg.test(val)) {
        return true;
    } else {
        return false;
    }
}

module.exports = router;
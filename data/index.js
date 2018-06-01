const db = require('./db')
const moment = require('moment')

module.exports = function () {
    setInterval(function () {
        var hours = new Date().getHours().toString(),
            today = moment().format('YYYY-MM-DD'),
            dataListLast = db.list[db.list.length - 1],
            data = {
                date: today,
                hours: hours,
                T: Math.floor(Math.random() * 2 + 3)
            }
        if (dataListLast.date != today || dataListLast.hours != hours) {
            db.add(data)
            console.log('添加新数据')
            console.log(data)
        } else {
            console.log('暂无新数据')
            console.log(dataListLast)
        }
    }, 10 * 1000)
}
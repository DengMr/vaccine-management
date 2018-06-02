// function message(literals, value1, value2) {
//     console.log(literals); // [ "", ", I am ", "" ]
//     console.log(value1); // Hi
//     console.log(value2); // Kevin
// }

// function message(literals, ...values) {
//     let result = literals.reduce((prev, next, i) => {
//         let value = values[i - 1];
//         return prev + value + next;
//     });
//     return result;
// }

// let x = 'Hi',
//     y = 'Kevin';
// var res = message `${x}, I am ${y}`;
// console.log(res);

////////////////////////////////////////////////////////

// var data = require('./data/data.json')

// function changeData(data) {
//     return data.slice(data.length - 7, data.length - 1)
// }

// console.log(changeData(data));

//////////////////////////////////////////////////////////////

// const db = require('./data/db')
// const moment = require('moment')
// var hours = new Date().getHours().toString(),
//     today = moment().format('YYYY-MM-DD'),
//     dataList = db.list,
//     dataListLast = dataList[dataList.length - 1],
//     data = {
//         date: today,
//         hours: hours,
//         T: Math.floor(Math.random() * 2 + 3) + 6
//     }

// db.update(dataList.length - 1, data)

// for (let i = 20; i <= 31; i++) {
//     for (let j = 0; j <= 23; j++) {
//         db.add({
//             date: `2018-05-${i < 10 ? '0' + i : i}`,
//             hours: j < 10 ? '0' + j : '' + j,
//             T: Math.floor(Math.random() * 2 + 3)
//         })
//     }
// }

// for (let i = 0; i <= 1; i++) {
//     for (let j = 0; j <= 23; j++) {
//         db.add({
//             date: `2018-06-${i < 10 ? '0' + i : i}`,
//             hours: j < 10 ? '0' + j : '' + j,
//             T: Math.floor(Math.random() * 2 + 3)
//         })
//     }
// }

// for (let i = 0; i <= 10; i++) {
//     db.add({
//         date: `2018-06-02`,
//         hours: i < 10 ? '0' + i : '' + i,
//         T: Math.floor(Math.random() * 2 + 3)
//     })
// }
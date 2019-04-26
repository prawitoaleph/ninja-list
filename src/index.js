// var uniqueRandomArray = require('unique-random-array');
// var ninjaList = require('./ninja-list.json');

// module.exports = {
//     all: ninjaList,
//     random: uniqueRandomArray(ninjaList)
// }

const uniqueRandomArray = require('unique-random-array');
const ninjaList = require('./ninja-list.json');

const all = ninjaList;
const random = uniqueRandomArray(ninjaList)

module.exports = {
    all,
    random
}
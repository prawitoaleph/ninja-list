var uniqueRandomArray = require('unique-random-array');
var ninjaList = require('./ninja-list.json');

module.exports = {
    all: ninjaList,
    random: uniqueRandomArray(ninjaList)
}
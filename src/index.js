// var uniqueRandomArray = require('unique-random-array');
// var ninjaList = require('./ninja-list.json');

// module.exports = {
//     all: ninjaList,
//     random: uniqueRandomArray(ninjaList)
// }

import uniqueRandomArray from 'unique-random-array';
import ninjaList from './ninja-list.json';

const all = ninjaList;
const random = uniqueRandomArray(ninjaList)

export {
    all,
    random
}
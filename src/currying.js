// Currying
// will take a function with N arguments and convert it to a function with 1 argument

import { pipe } from 'lodash/fp';

const trim = str => str.trim();
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
const lower = str => str.toLowerCase();

const transform = pipe(trim, lower, wrap('h1'));

console.log(transform('Javascipt'));

// function add(a) {
//     return function (b) {
//         return a + b;
//     };
// }

const add = a => b => a + b;

console.log(add(1)(2));
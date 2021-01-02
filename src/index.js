// functional programming

// Currying

import { pipe } from 'lodash/fp';

const trim = str => str.trim();
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
const lower = str => str.toLowerCase();

const transform = pipe(trim, lower, wrap('h1'));

console.log(transform('Javascipt'));
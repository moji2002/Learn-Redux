// Immutability means once you create an object you can not change it
// If you wanna change you should create a copy and change that copy

// Why Immutability?

// Predictability => if we pass an object to function we know that object its not gonna get changed
// Faster change detection
// Concurrency

// Why Not
// Performance 
// Memory overhead 
// we can fix these problem with libraries

//===========================================================================

// First approach
const person = { name: "john" };
const updatedPerson = Object.assign(
    {}, // target
    person, // source
    { family: 'bob', age: 30 } // updated properies (optional)
);

console.log(person);
console.log(updatedPerson);

//===========================================================================

// Using spread operator 
const dog = { name: 'max' };
const updatedDog = { ...dog, age: '3' };

console.log(dog);
console.log(updatedDog);

//===========================================================================

// both approach do shallow copy , we have to careful with working with nested objects

const person2 = {
    name: 'john',
    address: {
        country: "USA",
        city: "Seattle"
    }
};

const updatedPerson2 = { ...person2, name: 'bob' };
updatedPerson2.address.city = "New York"; //shallow copy
// the original object will be updated as well
// both person2 and updatedPerson2 object have the same address object // shallow copy
console.log(person2);
console.log(updatedPerson2);

//===========================================================================

// To solve the shallow copy problem we have to do a deep copy

const person3 = {
    name: 'john',
    address: {
        country: "USA",
        city: "Seattle"
    }
};

const updatedPerson3 = {
    ...person2,
    address: {
        ...person3.address,
        city: 'New York'
    },
    name: 'bob'
};

updatedPerson3.address.city = 'Paris';

console.log(person3);
console.log(updatedPerson3);

// But this approach is verbose so its better to use libraries

//===========================================================================

// Updating Arrays
const numbers = [1, 2, 3, 4];

// adding 
// add in the end
// const added = [...numbers, 5]; 
// add in the beginning
// const added = [5,...numbers]; 
// add in the middle
const index = numbers.indexOf(2);
const added = [
    ...numbers.slice(0, index),
    'added value',
    ...numbers.slice(index)
];

//removing 
const removed = numbers.filter(n => n !== 2);

// updating
const updatedArray = numbers.map(n => n === 2 ? 20 : n);

console.log(numbers);
console.log(added);
console.log(removed);
console.log(updatedArray);

//===========================================================================

// Libraries 

// Immutable
// Immer
// Mori

// Base code 
let book = { title: 'Harry Potter' };

function publish(book) {
    book.isPublished = true;
}

publish(book);

console.log(book);

//===========================================================================

// Immutable example

import { Map } from 'immutable';

const book = Map({ title: 'Harry Potter' });

function publish(book) {
    // its not going to modify the original object
    // its going to return a new object
    return book.set('isPublished', true);
}

const updatedBook = publish(book);

// get a property
console.log(book.get('title'));

// convert it to regular js object
console.log(book.toJS());
console.log(updatedBook.toJS());

//===========================================================================

// Immer example

import { produce } from 'immer';

let book = { title: 'Harry Potter' };

function publish(book) {
    return produce(book, draftBook => {
        draftBook.isPublished = true;
    });
}

const updatedBook = publish(book);

console.log(book);
console.log(updatedBook);
 
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


// Pure function will always return a same result without side effect

// No random values
// No current date/time
// No global state (DOM,files,db,etc)
// No mutation of parameters

// Redux reducers must be pure


// Inpure
const isEligibleInpure = (age) => {
    return age > minAge;
};

// pure
const isEligiblePure = (age, minAge) => {
    return age > minAge;
};

// Benefits of pure funcitons
// Self-documenting
// Easily testable
// Concurrency
// Cachable
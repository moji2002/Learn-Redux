// Store is a single object that includes our application state
// Reducer is a function in redux that takes current instance of the store and return the updated store (event handler)
// Action is a plain JS object that discribe what just happend (event)

function reducer(store, action) {
    const updated = { ...store };
    updated.product = "???";
}

// when the user preform an action 
// we create an Action and the dispatch it 
// we dont call the Reducer directly , we just work with the Store
// (Action) =====> dispatch (Store) =====> (Reducer) 
// the store is in charge of calling the reducer
// the reducer will compute the new state and  returns it 
// next store set the new state internally
// and notify ui componant about the state
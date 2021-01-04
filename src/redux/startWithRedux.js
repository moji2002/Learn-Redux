// Store is a single object that includes our application state
// Reducer is a function in redux that takes current instance of the store and return the updated store (event handler)
// Action is a plain JS object that discribes what just happend (event)

function reducer(store, action) {
  const updated = { ...store };
  updated.product = "???";
}

const actionSample = {
  type: "bugAdded", // or 'BUG_ADDED'
  payload: {
    description: "...",
  },
};

const actionSample2 = {
  type: "bugRemoved", // or 'BUG_REMOVED'
  payload: {
    id: 1, // payload contains the minimum information we need about an action
  },
};

// when the user preform an action
// we create an Action and the dispatch it
// we dont call the Reducer directly , we just work with the Store
// (Action) =====> dispatch (Store) =====> (Reducer)
// the store is in charge of calling the reducer
// the reducer will compute the new state and  returns it
// next store set the new state internally
// and notify ui componant about the state

// Steps
// 1.Design the store , the shape of the array or object in the store
// 2.Define the actions , for ex: add a bug, remove a bug, mark a bug as resolved
// 3.Create one or more reducers (take an action and return the updated state)
// 4.Setup the store based on the reducer

//===========================================================================

// store = []
let lastId = 0;

const reducer = (state = [], action) => {
  // The job of the reducer is to return the new state based on this action
  // using switch case
  switch (action.type) {
    case "bugAdded":
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case "bugRemoved":
      return state.filter((bug) => bug.id !== action.payload.id);
    default:
      return state;
  }

  // using if else
  if (action.type === "bugAdded")
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  else if (action.type === "bugRemoved")
    return state.filter((bug) => bug.id !== action.payload.id);
  return state;
};

//===========================================================================

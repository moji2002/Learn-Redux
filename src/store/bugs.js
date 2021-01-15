import { createAction, createReducer } from '@reduxjs/toolkit'

// Action creaters with redux toolkit
export const bugRemoved = createAction('bugRemoved')
export const bugAdded = createAction('bugAdded')
export const bugResolved = createAction('bugResolved')

let lastId = 1000;


// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case bugAdded.type:
//       return [
//         ...state,
//         {
//           id: ++lastId,
//           description: action.payload.description,
//           resolved: false,
//         },
//       ];
//     case bugRemoved.type:
//       return state.filter((bug) => bug.id !== action.payload.id);
//     case bugResolved.type:
//       return state.map((bug) =>
//         bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
//       );
//     default:
//       return state;
//   }
// };


// Using createReducer function
// this function uses immer under the hood
// if we use redux toolkit we dont have to worry about default case
const reducer = createReducer([], {
  // key: value
  // actions: function (event => event handler)
  [bugAdded.type]: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false
    })
  },

  [bugResolved.type]: (bugs, action) => {
    const index = bugs.findIndex(bug => bug.id === action.payload.id);
    bugs[index].resolved = true;
  },
})

export default reducer;

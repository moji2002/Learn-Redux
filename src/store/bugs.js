import { createAction } from '@reduxjs/toolkit'

// Action creaters with redux toolkit
export const bugRemoved = createAction('bugRemoved')
export const bugAdded = createAction('bugAdded')
export const bugResolved = createAction('bugResolved')

let lastId = 1000;
const reducer = (state = [], action) => {
  switch (action.type) {
    case bugAdded.type:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case bugRemoved.type:
      return state.filter((bug) => bug.id !== action.payload.id);
    case bugResolved.type:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    default:
      return state;
  }
};

export default reducer;

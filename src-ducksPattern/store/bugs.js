// Ducks pattern (combine actions, actionTypes, reducer)

// Action types
const actions = {
  BUG_ADDED: "bugAdded",
  BUG_REMOVED: "bugRemoved",
  BUG_RESOLVED: "bugResolved",
};

// Action creaters
export const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: { description },
});

export const bugResolved = (id) => ({
  type: actions.BUG_RESOLVED,
  payload: { id },
});

let lastId = 1000;

const reducer = (state = [], action) => {
  // The job of the reducer is to return the new state based on this action
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);
    case actions.BUG_RESOLVED:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    default:
      return state;
  }
};

export default reducer;

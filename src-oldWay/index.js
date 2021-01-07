import store from "./store/store";
import actions from "./store/actionTypes";
import { bugAdded, bugResolved } from "./store/actionCreators";

// console.log(store);

const unsubscribe = store.subscribe(() => {
  // this function get called every time store changed
  console.log("store changed", store.getState());
});

// subscribe will return the unsubscribe function

store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    description: "bug1",
  },
});

store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    description: "bug2",
  },
});

// unsubscribe();

store.dispatch({
    type: actions.BUG_REMOVED,
    payload: {
        id: 1001
    }
});

store.dispatch(bugAdded("new bug 3"));
store.dispatch(bugResolved(1002));

// dispatch action using action creator

console.log(store.getState());

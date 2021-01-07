import store from "./store/store";
import { bugAdded, bugResolved } from "./store/bugs";

// console.log(store);

const unsubscribe = store.subscribe(() => {
  // this function get called every time store changed
  console.log("store changed", store.getState());
});

// subscribe will return the unsubscribe function

// unsubscribe();

store.dispatch(bugAdded("new bug 3"));
store.dispatch(bugAdded("new bug 3"));
store.dispatch(bugAdded("new bug 3"));
store.dispatch(bugAdded("new bug 3"));
store.dispatch(bugResolved(1002));

// dispatch action using action creator

console.log(store.getState());

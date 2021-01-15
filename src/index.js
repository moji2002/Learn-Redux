import store from './store/store'
import { bugAdded, bugResolved } from './store/bugs'
// console.log(store);

const unsubscribe = store.subscribe(() => {
  // this function get called every time store changed
  console.log("store changed", store.getState());
});

// subscribe will return the unsubscribe function

store.dispatch(bugAdded({ description: "new bug 1" }));
store.dispatch(bugAdded({ description: "new bug 2" }));
store.dispatch(bugAdded({ description: "new bug 3" }));
unsubscribe();
store.dispatch(bugAdded({ description: "new bug 4" }));
store.dispatch(bugResolved({ id: 1002 }));

// dispatch action using action creator

console.log(store.getState());

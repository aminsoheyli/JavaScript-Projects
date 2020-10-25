import configureStore from "./store/configureStore";
import {bugAdded, bugRemoved, bugResolved,bugAssignedToUser,
    getUnresolvedBugs, getBugsByUser} from "./store/bugs";
import {projectAdded} from "./store/projects";
import {userAdded} from "./store/users";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
});

store.dispatch(userAdded({name: "User 1"}));
store.dispatch(userAdded({name: "User 2"}));
store.dispatch(projectAdded({name: 'Project 1'}));
store.dispatch(bugAdded({description: " Bug 1"}));
store.dispatch(bugAdded({description: " Bug 2"}));
store.dispatch(bugAdded({description: " Bug 3"}));
store.dispatch(bugAssignedToUser({bugId:1,userId:1}));
store.dispatch(bugResolved({id: 3}));
store.dispatch(bugRemoved({id: 2}));

const x = getUnresolvedBugs(store.getState());
const y = getUnresolvedBugs(store.getState());

const bugs = getBugsByUser(1)(store.getState())

console.log(bugs);
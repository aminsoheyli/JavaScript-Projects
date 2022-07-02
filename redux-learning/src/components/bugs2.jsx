import React, { Component } from "react";
import StoreContext from "../contexts/storeContext";
import { loadBugs } from "../store/bugs";

class Bugs2 extends Component {
  static contextType = StoreContext;

  state = { bugs: [] };

  componentDidMount() {
    // subscribe to the store
    const store = this.context;
    this.unsubscribe = store.subscribe(() => {
      const bugsInStore = store.getState().entities.bugs.list;
      if (this.state.bugs !== bugsInStore) this.setState({ bugs: bugsInStore });
    });

    // dispatch the action to get the data
    store.dispatch(loadBugs());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <ul>
        {this.state.bugs.map(bug => (
          <li key={bug.id}>{bug.id}</li>
        ))}
      </ul>
    );
  }
}

export default Bugs2;

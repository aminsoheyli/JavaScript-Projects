import React from "react";
import "./App.css";
import Bugs from "./components/bugs";
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import BugsList from "./components/bugsList";

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <BugsList/>
        </Provider>
    );
}

export default App;

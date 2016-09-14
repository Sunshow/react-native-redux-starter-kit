import React, {Component} from "react";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import RootNavigator from "./navigator/RootNavigator";

const store = configureStore();

class RootApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <RootNavigator />
            </Provider>
        );
    }
}

export default RootApp;

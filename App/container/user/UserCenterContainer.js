import React from "react";
import {View, Text} from "react-native";
import {connect} from "react-redux";
import BaseContainer from "../BaseContainer";

class UserCenterContainer extends BaseContainer {
    componentDidMount() {
        //Actions.userLogin();
    }
    render() {
        if (true) {
            //return null;
        }
        return (
            <View style={{margin: 128}}>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        routes: state.routes
    }
}

export default connect(
    mapStateToProps, {}
)(UserCenterContainer)
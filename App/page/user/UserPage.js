import React, {Component} from "react";
import {StyleSheet, View, Text, TouchableOpacity, InteractionManager} from "react-native";

export default class UserPage extends Component {
    render() {
        return (
            <View style={
            {
                flex: 1,
                alignItems: 'center',
                justifyContent:'center'
            }
            }>
                <Text>我的</Text>
                <TouchableOpacity onPress={this.navigateToLogin.bind(this)}>
                    <Text>点我登录</Text>
                </TouchableOpacity>
            </View>
        );
    }

    navigateToLogin() {
        var navigator = this.props.navigator;

        InteractionManager.runAfterInteractions(() => {
            navigator.push({
                id: 'PageTwo',
            });
        });
    }
}
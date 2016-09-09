import React, {Component} from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";

class SubscriptionPage extends Component {
    render() {
        return (
            <View style={
            {
                flex: 1,
                alignItems: 'center',
                justifyContent:'center'
            }
            }>
                <Text>订阅</Text>
            </View>
        );
    }
}

module.exports = SubscriptionPage;
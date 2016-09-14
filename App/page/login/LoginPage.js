import React, {Component, PropTypes} from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";

export default class LoginPage extends Component {
    handlePressLoginButton() {
        this.props.onLoginButtonPressed({
            //
        })
    }

    render() {
        return (
            <View style={
            {
                flex: 1,
                alignItems: 'center',
                justifyContent:'center'
            }
            }>
                <Text>登录</Text>
                <TouchableOpacity onPress={this.handlePressLoginButton.bind(this)}>
                    <Text>点我跳到注册页面</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    col: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'flex-end', // this will prevent TFs from stretching horizontal
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        // backgroundColor: MKColor.Lime,
    },
    textfield: {
        height: 28,  // have to do it on iOS
        marginTop: 32,
    },
    textfieldWithFloatingLabel: {
        flex: 1,
        height: 48,  // have to do it on iOS
        marginTop: 10,
    },
});

LoginPage.propTypes = {
    onLoginButtonPressed: PropTypes.func.isRequired,
}
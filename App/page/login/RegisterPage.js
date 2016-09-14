import React, {Component, PropTypes} from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";

export default class RegisterPage extends Component {
    handlePressRegisterButton() {
        this.props.onRegisterButtonPressed({
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
                <Text>注册页</Text>
                <TouchableOpacity onPress={this.handlePressRegisterButton.bind(this)}>
                    <Text>点我直接跳回登录前页面</Text>
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

RegisterPage.propTypes = {
    onRegisterButtonPressed: PropTypes.func.isRequired
}
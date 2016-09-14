import React, {Component, PropTypes} from "react";
import {Platform, StyleSheet, TouchableOpacity, Text} from "react-native";

export default class NavigationHeaderRightButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.buttonContainer} onPress={this.props.onPress}>
                <Text style={styles.button}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

NavigationHeaderRightButton.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16
    },
    button: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: 'rgba(0, 0, 0, .9)',
        textAlign: Platform.OS === 'ios' ? 'center' : 'left'
    }
});

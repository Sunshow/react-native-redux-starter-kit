import React, {Component, PropTypes} from "react";
import {Platform, StyleSheet, View, Text} from "react-native";

export default class NavigationHeaderTitleText extends Component {
    render() {
        return (
            <View style={[styles.title, this.props.style]} {...this.props.viewProps}>
                <Text style={[styles.titleText, this.props.textStyle]}>{this.props.children}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16
    },

    titleText: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: 'rgba(0, 0, 0, .9)',
        textAlign: 'center'
    }
});

NavigationHeaderTitleText.propTypes = {
    children: React.PropTypes.string.isRequired,
    style: View.propTypes.style,
    textStyle: Text.propTypes.style
};

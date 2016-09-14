import React, {Component} from "react";
import {connect} from "react-redux";
import {NavigationExperimental, StyleSheet} from "react-native";
import {NAVIGATOR_NAME_ROOT} from "../constant/navigation/NavigatorNameConstant";
import MainContainer from "../container/main/MainContainer";
import LoginNavigator from "../navigator/LoginNavigator"

const {
    CardStack: NavigationCardStack
} = NavigationExperimental;

const styles = StyleSheet.create({
    navigator: {
        flex: 1
    }
});

/**
 * 最外层的导航器, 控制全局跳转, 不显示头部导航
 */
class RootNavigator extends Component {
    renderScene(sceneProps) {
        let route = sceneProps.scene.route
        switch (route.key) {
            case 'MainPage':
                return (
                    <MainContainer/>
                )
            case 'LoginNavigator':
                return (
                    <LoginNavigator/>
                )
            default:
                return null
        }
    }

    render() {
        return (
            <NavigationCardStack
                style={styles.navigator}
                direction="vertical"
                navigationState={this.props.navigationState}
                renderScene={this.renderScene.bind(this)}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        navigationState: state.navigation.navigationStates[NAVIGATOR_NAME_ROOT]
    }
}

export default connect(
    mapStateToProps, {
    }
)(RootNavigator)
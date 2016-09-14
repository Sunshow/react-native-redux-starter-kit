import React, {Component} from "react";
import {connect} from "react-redux";
import {NavigationExperimental, StyleSheet, BackAndroid} from "react-native";
import NavigationHeaderBackButton from "NavigationHeaderBackButton"
import {NAVIGATOR_NAME_ROOT, NAVIGATOR_NAME_LOGIN} from "../constant/navigation/NavigatorNameConstant";
import NavigationHeaderTitleText from "../component/navigation/NavigationHeaderTitleText"
import {navigationPop, navigationLoginReset} from "../action/navigation/NavigationAction";
import LoginContainer from "../container/login/LoginContainer";
import RegisterContainer from "../container/login/RegisterContainer";

const {
    Header: NavigationHeader,
    CardStack: NavigationCardStack
} = NavigationExperimental;

const styles = StyleSheet.create({
    navigator: {
        flex: 1
    }
});

/**
 * 登录页导航, 带Header
 * 可由任意场景直接调起, 所以即使是首页Header也需要有返回
 */
class LoginNavigator extends Component {
    constructor(props) {
        super(props);

        this.handleBack = this._handleBack.bind(this);
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.handleBack);
        this.props.navigationLoginReset()
    }

    _handleBack () {
        let navigationState = this.props.navigationState;
        if (navigationState.index > 0) {
            // 不在首页, 则执行当前导航的POP
            this.props.navigationPop(NAVIGATOR_NAME_LOGIN);
        } else {
            // 在首页, 执行上级导航的POP, 退出当前导航
            this.props.navigationPop(NAVIGATOR_NAME_ROOT)
        }
        return true;
    }

    onNavigateBack(sceneProps) {
        let route = sceneProps.scene.route
        switch (route.key) {
            case 'LoginPage':
                // 调用上级导航的POP
                this.props.navigationPop(NAVIGATOR_NAME_ROOT)
                break
            default:
                this.props.navigationPop(NAVIGATOR_NAME_LOGIN)
        }
    }

    renderTitleComponent(sceneProps) {
        const title = sceneProps.scene.route.title || '';
        return (
            <NavigationHeaderTitleText>{title}</NavigationHeaderTitleText>
        );
    }

    renderLeftComponent(sceneProps) {
        return (
            <NavigationHeaderBackButton
                {...sceneProps}
                onPress={() => this.onNavigateBack(sceneProps)}
            />
        );
    }

    renderHeader(sceneProps) {
        let route = sceneProps.scene.route
        switch (route.key) {
            default:
                return (
                    <NavigationHeader
                        {...sceneProps}
                        onNavigateBack={() => this.onNavigateBack(sceneProps)}
                        renderTitleComponent={this.renderTitleComponent.bind(this)}
                        renderLeftComponent={this.renderLeftComponent.bind(this)}
                    />
                )
        }
    }

    renderScene(sceneProps) {
        let route = sceneProps.scene.route
        switch (route.key) {
            case 'LoginPage':
                return (
                    <LoginContainer/>
                )
            case 'RegisterPage':
                return (
                    <RegisterContainer/>
                )
            default:
                return null
        }
    }

    render() {
        return (
            <NavigationCardStack
                style={styles.navigator}
                navigationState={this.props.navigationState}
                renderScene={this.renderScene.bind(this)}
                renderHeader={this.renderHeader.bind(this)}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        navigationState: state.navigation.navigationStates[NAVIGATOR_NAME_LOGIN]
    }
}

export default connect(
    mapStateToProps, {
        navigationPop,
        navigationLoginReset
    }
)(LoginNavigator)
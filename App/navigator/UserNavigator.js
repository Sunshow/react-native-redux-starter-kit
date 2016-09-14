import React, {Component} from "react";
import {connect} from "react-redux";
import {NavigationExperimental, StyleSheet} from "react-native";
import {NAVIGATOR_NAME_USER} from "../constant/navigation/NavigatorNameConstant";
import NavigationHeaderTitleText from "../component/navigation/NavigationHeaderTitleText"
import {navigationPop} from "../action/navigation/NavigationAction";
import UserPage from "../page/user/UserPage";

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
 * 用户中心页导航, 带Header
 */
class UserNavigator extends Component {
    renderTitleComponent(sceneProps) {
        const title = sceneProps.scene.route.title || '';
        return (
            <NavigationHeaderTitleText>{title}</NavigationHeaderTitleText>
        );
    }

    renderHeader(sceneProps) {
        let route = sceneProps.scene.route
        switch (route.key) {
            default:
                return (
                    <NavigationHeader
                        {...sceneProps}
                        onNavigateBack={() => this.props.navigationPop()}
                        renderTitleComponent={this.renderTitleComponent.bind(this)}
                    />
                )
        }
    }

    renderScene(sceneProps) {
        let route = sceneProps.scene.route
        switch (route.key) {
            case 'UserPage':
                return (
                    <UserPage/>
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
        navigationState: state.navigation.navigationStates[NAVIGATOR_NAME_USER]
    }
}

export default connect(
    mapStateToProps, {
        navigationPop
    }
)(UserNavigator)
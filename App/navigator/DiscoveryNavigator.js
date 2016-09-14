import React, {Component} from "react";
import {connect} from "react-redux";
import {NavigationExperimental, StyleSheet} from "react-native";
import {NAVIGATOR_NAME_DISCOVERY} from "../constant/navigation/NavigatorNameConstant";
import {navigationPop} from "../action/navigation/NavigationAction";
import NavigationHeaderTitleText from "../component/navigation/NavigationHeaderTitleText"
import DiscoveryPage from "../page/discovery/DiscoveryPage";

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
 * 发现页导航, 带Header
 */
class DiscoveryNavigator extends Component {
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
            case 'DiscoveryPage':
                return (
                    <DiscoveryPage/>
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
        navigationState: state.navigation.navigationStates[NAVIGATOR_NAME_DISCOVERY]
    }
}

export default connect(
    mapStateToProps, {
        navigationPop
    }
)(DiscoveryNavigator)
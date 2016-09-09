import React, {Component} from "react";
import {connect} from "react-redux";
import BaseContainer from "../BaseContainer";
import {navigationPush, tabbarSwitch} from "../../action/navigation/NavigationAction";
import MainPage from "../../page/main/MainPage";

class MainContainer extends BaseContainer {

    handleTabPress(tabProps) {
        switch (tabProps.key) {
            case 'UserTab':
                this.props.navigationPush({key: 'LoginPage', title: '登录'})
                break
            default:
                this.props.tabbarSwitch(tabProps)
        }
    }

    render() {
        return (
            <MainPage
                selectedTab={this.props.selectedTab}
                onTabPress={this.handleTabPress.bind(this)}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedTab: state.navigation.tabbarState.selectedTab
    }
}

export default connect(
    mapStateToProps, {
        navigationPush,
        tabbarSwitch
    }
)(MainContainer)
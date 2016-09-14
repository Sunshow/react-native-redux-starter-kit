import React, {Component} from "react";
import {BackAndroid} from "react-native";
import {connect} from "react-redux";
import Toast from "react-native-root-toast";
import BaseContainer from "../BaseContainer";
import {NAVIGATOR_NAME_DISCOVERY, NAVIGATOR_NAME_SUBSCRIPTION, NAVIGATOR_NAME_USER} from "../../constant/navigation/NavigatorNameConstant"
import {navigationPush, tabbarSwitch, navigationLoginDefault} from "../../action/navigation/NavigationAction";
import MainPage from "../../page/main/MainPage"

class MainContainer extends BaseContainer {
    constructor(props) {
        super(props)

        this.handleBack = this._handleBack.bind(this)
        this.pendingExitTab = ''
        this.pendingExit = 0   // 等待退出应用标记
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.handleBack);
        this.props.navigationLoginReset()
    }

    _handleBack () {
        // 判断当前处在哪个tab的导航内
        let navigatorName
        switch (this.props.selectedTab) {
            case 'DiscoveryTab':
                navigatorName = NAVIGATOR_NAME_DISCOVERY
                break
            case 'SubscriptionTab':
                navigatorName = NAVIGATOR_NAME_SUBSCRIPTION
                break
            case 'UserTab':
                navigatorName = NAVIGATOR_NAME_USER
                break
            default:
                navigatorName = null
        }
        if (!navigatorName) {
            return true
        }

        let navigationState = this.props.navigationStates[navigatorName];
        if (navigationState.index > 0) {
            // 不在首页, 则执行当前导航的POP
            this.props.navigationPop(NAVIGATOR_NAME_DISCOVERY);
            return true
        }

        let currentTime = new Date().getTime();
        if (this.props.selectedTab != this.pendingExitTab || currentTime - this.pendingExit > 1500) {
            Toast.show('再按一次退出应用', {
                duration: Toast.durations.SHORT, // toast显示时长
                position: Toast.positions.BOTTOM, // toast位置
                shadow: true, // toast是否出现阴影
                animation: true, // toast显示/隐藏的时候是否需要使用动画过渡
                hideOnPress: true, // 是否可以通过点击事件对toast进行隐藏
                delay: 0 // toast显示的延时
            });
            this.pendingExitTab = this.props.selectedTab
            this.pendingExit = currentTime;
            return true;
        }
        return false;
    }

    handleTabPress(tabProps) {
        switch (tabProps.key) {
            case 'UserTab':
                let hasLogin = false;

                // 如果未登录, 直接切换tab, 否则弹出登录页
                if (hasLogin) {
                    this.props.tabbarSwitch(tabProps)
                } else {
                    this.props.navigationLoginDefault()
                }
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
        navigationStates: state.navigation.navigationStates,
        selectedTab: state.navigation.tabbarState.selectedTab
    }
}

export default connect(
    mapStateToProps, {
        navigationPush,
        tabbarSwitch,
        navigationLoginDefault
    }
)(MainContainer)
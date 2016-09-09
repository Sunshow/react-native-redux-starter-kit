import React, {Component} from "react";
import {NavigationExperimental, StyleSheet, BackAndroid} from "react-native";
import {Provider, connect} from "react-redux";
import Toast from "react-native-root-toast";
import configureStore from "./store/configureStore";
import {renderScene} from "./scene/SceneManager";
import {navigationPop} from "./action/navigation/NavigationAction";

const store = configureStore();

const {
    Header: NavigationHeader,
    CardStack: NavigationCardStack
} = NavigationExperimental;

const styles = StyleSheet.create({
    navigator: {
        flex: 1
    }
});

class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleBack = this._handleBack.bind(this);
        this.pendingExit = 0;   // 等待退出应用标记
    }

    _handleBack () {
        let navigationState = this.props.navigationState;
        if (navigationState.index > 0) {
            // 不在首页, 则执行POP
            this.props.navigationPop();
            return true;
        }
        let currentTime = new Date().getTime();
        if (currentTime - this.pendingExit > 1500) {
            Toast.show('再按一次退出应用', {
                duration: Toast.durations.SHORT, // toast显示时长
                position: Toast.positions.BOTTOM, // toast位置
                shadow: true, // toast是否出现阴影
                animation: true, // toast显示/隐藏的时候是否需要使用动画过渡
                hideOnPress: true, // 是否可以通过点击事件对toast进行隐藏
                delay: 0 // toast显示的延时
            });
            this.pendingExit = currentTime;
            return true;
        }
        return false;
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
    }

    renderHeader(sceneProps) {
        return (
            <NavigationHeader
                {...sceneProps}
                onNavigateBack={this.props.navigationPop.bind(this)}
            />
        )
    }

    render() {
        return (
            <NavigationCardStack
                navigationState={this.props.navigationState}
                renderScene={(sceneProps) => renderScene(sceneProps)}
                renderHeader={this.renderHeader.bind(this)}
                style={styles.navigator}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        navigationState: state.navigation.navigationState
    }
}

const ReduxApp = connect(
    mapStateToProps, {
        navigationPop
    }
)(App)

class RootApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <ReduxApp />
            </Provider>
        );
    }
}

export default RootApp;

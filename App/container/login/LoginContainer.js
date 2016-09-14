import React from "react";
import {connect} from "react-redux";
import BaseContainer from "../BaseContainer";
import LoginPage from "../../page/login/LoginPage";
import {NAVIGATOR_NAME_LOGIN} from "../../constant/navigation/NavigatorNameConstant";
import {navigationPop, navigationPush} from "../../action/navigation/NavigationAction";

class LoginContainer extends BaseContainer {
    login(props) {
        // 演示用直接跳到注册页
        this.props.navigationPush({
            key: 'RegisterPage',
            title: '注册'
        }, NAVIGATOR_NAME_LOGIN)
        return
    }

    render() {
        return (
            <LoginPage onLoginButtonPressed={this.login.bind(this)} />
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(
    mapStateToProps, {
        navigationPop,
        navigationPush
    }
)(LoginContainer)
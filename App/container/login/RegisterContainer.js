import React from "react";
import {connect} from "react-redux";
import BaseContainer from "../BaseContainer";
import RegisterPage from "../../page/login/RegisterPage";
import {NAVIGATOR_NAME_ROOT} from "../../constant/navigation/NavigatorNameConstant";
import {navigationPop} from "../../action/navigation/NavigationAction";

class RegisterContainer extends BaseContainer {
    register(props) {
        this.props.navigationPop(NAVIGATOR_NAME_ROOT)
    }

    render() {
        return (
            <RegisterPage onRegisterButtonPressed={this.register.bind(this)} />
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(
    mapStateToProps, {
        navigationPop,
    }
)(RegisterContainer)
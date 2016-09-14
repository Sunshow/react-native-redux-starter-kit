import {
    NAVIGATION_PUSH,
    NAVIGATION_POP,
    TABBAR_SWITCH,
    NAVIGATION_LOGIN_RESET
} from "../../constant/navigation/NavigationActionConstant";
import {NAVIGATOR_NAME_ROOT, NAVIGATOR_NAME_LOGIN} from "../../constant/navigation/NavigatorNameConstant";

export function navigationPush(route, navigator = '') {
    return {
        type: NAVIGATION_PUSH,
        route,
        navigator
    }
}

export function navigationPop(navigator = '') {
    return {
        type: NAVIGATION_POP,
        navigator
    }
}

export function tabbarSwitch(tabProps) {
    return {
        type: TABBAR_SWITCH,
        tabProps
    }
}

export function navigationLoginReset() {
    return {
        type: NAVIGATION_LOGIN_RESET,
        navigator: NAVIGATOR_NAME_LOGIN
    }
}

export function navigationLoginDefault() {
    return {
        type: NAVIGATION_PUSH,
        route: {
            key: 'LoginNavigator'
        },
        navigator: NAVIGATOR_NAME_ROOT
    }
}
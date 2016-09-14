import {NAVIGATION_PUSH, NAVIGATION_POP, TABBAR_SWITCH, NAVIGATION_LOGIN_RESET} from "../../constant/navigation/NavigationActionConstant";
import {NAVIGATOR_NAME_ROOT, NAVIGATOR_NAME_LOGIN, NAVIGATOR_NAME_DISCOVERY, NAVIGATOR_NAME_SUBSCRIPTION, NAVIGATOR_NAME_USER} from "../../constant/navigation/NavigatorNameConstant";
import {NavigationExperimental} from "react-native";

const {
    StateUtils: NavigationStateUtils
} = NavigationExperimental;

const initialLoginNavigationState = {
    index: 0,
    routes: [{
        key: 'LoginPage',
        title: '登录'
    }]
}

const initialRootNavigationState = {
    index: 0,
    routes: [
        {
            key: 'MainPage'
        }
    ]
}

const initialDiscoveryNavigationState = {
    index: 0,
    routes: [
        {
            key: 'DiscoveryPage',
            title: 'AwesomeProject'
        }
    ]
}

const initialSubscriptionNavigationState = {
    index: 0,
    routes: [
        {
            key: 'SubscriptionPage',
            title: '订阅'
        }
    ]
}

const initialUserNavigationState = {
    index: 0,
    routes: [
        {
            key: 'UserPage',
            title: '我的'
        }
    ]
}

const initialState = {
    navigationStates: {
        [NAVIGATOR_NAME_ROOT]: initialRootNavigationState,
        [NAVIGATOR_NAME_LOGIN]: initialLoginNavigationState,
        [NAVIGATOR_NAME_DISCOVERY]: initialDiscoveryNavigationState,
        [NAVIGATOR_NAME_SUBSCRIPTION]: initialSubscriptionNavigationState,
        [NAVIGATOR_NAME_USER]: initialUserNavigationState
    },
    tabbarState: {
        selectedTab: 'DiscoveryTab'
    }
}

export default function navigation(state = initialState, action) {
    switch (action.type) {
        case NAVIGATION_PUSH:
        case NAVIGATION_POP: {
            let originalNavigationState = state.navigationStates[action.navigator]
            let navigationState = null
            if (action.type == NAVIGATION_PUSH) {
                navigationState = NavigationStateUtils.push(originalNavigationState, action.route);
            } else if (action.type == NAVIGATION_POP) {
                navigationState = NavigationStateUtils.pop(originalNavigationState);
            }
            if (navigationState && navigationState !== originalNavigationState) {
                return Object.assign({}, state, {
                    navigationStates: Object.assign({}, state.navigationStates, {[action.navigator]: navigationState})
                });
            }
            break
        }
        case NAVIGATION_LOGIN_RESET: {
            return Object.assign({}, state, {
                navigationStates: Object.assign({}, state.navigationStates, {[action.navigator]: initialLoginNavigationState})
            });
        }
        case TABBAR_SWITCH: {
            return Object.assign({}, state, {
                tabbarState: {
                    selectedTab: action.tabProps.key
                }
            })
        }
        default:
            return state;
    }
    return state;
}
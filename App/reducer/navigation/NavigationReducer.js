import {NAVIGATION_PUSH, NAVIGATION_POP, TABBAR_SWITCH} from "../../constant/navigation/NavigationActionConstant";
import {initialRoute} from "../../scene/SceneManager";
import {NavigationExperimental} from "react-native";

const {
    StateUtils: NavigationStateUtils
} = NavigationExperimental;

const initialState = {
    navigationState: {
        index: 0, // Starts with first route focused.
        routes: [initialRoute] // Starts with only one route.
    },
    tabbarState: {
        selectedTab: 'DiscoveryTab'
    }
}

export default function navigation(state = initialState, action) {
    switch (action.type) {
        case NAVIGATION_PUSH: {
            // Use the push reducer provided by NavigationStateUtils
            let navigationState = NavigationStateUtils.push(state.navigationState, action.route);
            if (navigationState !== state.navigationState) {
                // Always use setState() when setting a new state!
                // If you are new to ES6, the above is equivalent to:
                // this.setState({navigationState: navigationState});
                return Object.assign({}, state, {
                    navigationState
                });
            }
            break;
        }
        case NAVIGATION_POP: {
            let navigationState = NavigationStateUtils.pop(state.navigationState)
            if (navigationState !== state.navigationState) {
                return Object.assign({}, state, {
                    navigationState
                });
            }
            break;
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
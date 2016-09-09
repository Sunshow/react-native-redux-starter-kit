import {NAVIGATION_PUSH, NAVIGATION_POP, TABBAR_SWITCH} from "../../constant/navigation/NavigationActionConstant";

export function navigationPush(route) {
    return {
        type: NAVIGATION_PUSH,
        route
    }
}

export function navigationPop() {
    return {
        type: NAVIGATION_POP
    }
}

export function tabbarSwitch(tabProps) {
    return {
        type: TABBAR_SWITCH,
        tabProps
    }
}
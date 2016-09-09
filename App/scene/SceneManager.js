import React, {Component} from "react";
import MainContainer from "../container/main/MainContainer";
import DiscoveryPage from "../page/discovery/DiscoveryPage";
import SubscriptionPage from "../page/subscription/SubscriptionPage";
import UserPage from "../page/user/UserPage";
import PageTwo from "../PageTwo";

export const initialRoute = {key: 'InitPage', title: 'AwesomeProject'}

export function renderScene(sceneProps) {
    let route = sceneProps.scene.route
    switch (route.key) {
        case 'InitPage':
            return (
                <MainContainer/>
            );
        case 'MainPage':
            return (
                <MainContainer/>
            );
        case 'LoginPage':
            return (
                <PageTwo/>
            )
        default:
            return null;
    }
}

export function renderTabScene(tabSceneProps) {
    switch (tabSceneProps.key) {
        case 'DiscoveryTab':
            return (
                <DiscoveryPage/>
            )
        case 'SubscriptionTab':
            return (
                <SubscriptionPage/>
            )
        case 'UserTab':
            return (
                <UserPage/>
            )
        default:
            return null
    }
}
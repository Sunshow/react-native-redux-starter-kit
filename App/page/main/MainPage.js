import React, {Component, PropTypes} from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import TabNavigator from "react-native-tab-navigator";
import DiscoveryNavigator from "../../navigator/DiscoveryNavigator"
import SubscriptionNavigator from "../../navigator/SubscriptionNavigator"
import UserNavigator from "../../navigator/UserNavigator"

export default class MainPage extends Component {
    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    title="发现"
                    selected={this.props.selectedTab === 'DiscoveryTab'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={require("../../image/tab/ic_tab_discovery.png")} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../../image/tab/ic_tab_discovery_selected.png")} style={styles.iconStyle}/>}
                    onPress={() => this.props.onTabPress({key: 'DiscoveryTab'})}>
                    <DiscoveryNavigator/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="订阅"
                    selected={this.props.selectedTab === 'SubscriptionTab'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={require("../../image/tab/ic_tab_subscription.png")} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../../image/tab/ic_tab_subscription_selected.png")} style={styles.iconStyle}/>}
                    onPress={() => this.props.onTabPress({key: 'SubscriptionTab'})}>
                    <SubscriptionNavigator/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="我的"
                    selected={this.props.selectedTab === 'UserTab'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={require("../../image/tab/ic_tab_user.png")} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../../image/tab/ic_tab_user_selected.png")} style={styles.iconStyle}/>}
                    onPress={() => this.props.onTabPress({key: 'UserTab'})}>
                    <UserNavigator/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        width: 26,
        height: 26,
    },
    textStyle: {
        color: '#999',
    },
    selectedTextStyle: {
        color: 'black',
    }
});

MainPage.protoTypes = {
    onTabPress: PropTypes.func.isRequired
}
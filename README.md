# react-native-redux-starter-kit

## Demo

![Simple Demo](https://raw.githubusercontent.com/Sunshow/react-native-redux-starter-kit/master/demo.gif)

## Features

- Use NavigationExperimental
- Redux with navigation
- Tabbar support

## How to run

- npm install
- react-native run-ios
- react-native run-android

## 中文说明

- 支持国内最常见的Tab导航类APP
- 支持在Tab切换前做前置判断
- 支持在任意位置Push出登录界面
- 支持安卓返回按钮

### 关于导航

使用了号称是最先进的下一代导航系统: NavigationExperimental

- RootNavigator: 根导航, 用来弹出全屏覆盖的新页面
- TabNavigator: 每个Tab各拥有一个独立的导航
- LoginNavigator: 登录页支持在任意页面调起, 所以是一个独立的导航, 使用时通过RootNavigator来Push

### 其他

不要去尝试各种看起来很美的第三方库

不要去尝试各种看起来很美的第三方库

不要去尝试各种看起来很美的第三方库
import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { TabNavigator } from 'react-navigation';

import HomeTab  from './src/views/HomePage'
import UserTab from './src/views/MinePage'

const App = TabNavigator(
    {
        HomeTab: {
            screen: HomeTab,
            path: '/home',
            navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Image
                        source={require('./src/image/home.png')}
                        style={[{tintColor: tintColor},styles.icon]}
                    />
                ),
            }
        },
        UserTab: {
            screen: UserTab,
            path: '/user',
            navigationOptions: {
                tabBarLabel: '用户',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Image
                        source={require('./src/image/me.png')}
                        style={[{tintColor: tintColor},styles.icon]}
                    />
                ),
            }
        }
    },{
        initialRouteName: 'HomeTab',
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
        tabBarOptions: {
            activeTintColor: '#008AC9', // 文字和图片选中颜色
            inactiveTintColor: '#999', // 文字和图片默认颜色
            showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
            indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
            style: {
                backgroundColor: '#fff', // TabBar 背景色
                height:50,
            },
            labelStyle: {
                height:45,
                fontSize: 8, // 文字大小
            },
        },

    }
)
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff'
    },
    icon: {
        height: 22,
        width: 22,
        resizeMode: 'contain'
    }
});
export default App;
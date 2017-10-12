import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { TabNavigator } from 'react-navigation';

//引入视图组件
import HomeTab  from './src/views/HomePage'
import AuctionPage from './src/views/AuctionPage'
import SalePage from './src/views/SalePage'
import UserTab from './src/views/MinePage'

//配置tab导航栏
const App = TabNavigator(
    {
        HomeTab: {
            screen: HomeTab,
            path: '/home',
            navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon: ({tintColor,focused}) => (
                    focused
                        ?
                        <Image
                            source={require('./src/image/Tabdown.png')}
                            style={styles.icon}
                        >
                            <View style={styles.tabbarup}>
                                <Text style={styles.tabbarupText}>首 页</Text>
                            </View>
                        </Image>
                        :
                        <Image
                            source={require('./src/image/Tabup.png')}
                            style={styles.icon}
                        >
                            <View style={styles.tabbardown}>
                                <Text style={{color:'rgba(255,255,255,.7)',fontSize: 15,fontWeight: 'bold'}}>首 页</Text>
                            </View>
                        </Image>
                ),
            }
        },
        AuctionTab: {
            screen: AuctionPage,
            path: '/auction',
            navigationOptions: {
                tabBarLabel: '竞拍',
                tabBarIcon: ({tintColor,focused}) => (
                    focused
                        ?
                        <Image
                            source={require('./src/image/Tabdown.png')}
                            style={styles.icon}
                        >
                            <View style={styles.tabbarup}>
                                <Text style={styles.tabbarupText}>竞 拍</Text>
                            </View>
                        </Image>
                        :
                        <Image
                            source={require('./src/image/Tabup.png')}
                            style={styles.icon}
                        >
                            <View style={styles.tabbardown}>
                                <Text style={{color:'rgba(255,255,255,.7)',fontSize: 15,fontWeight: 'bold'}}>竞 拍</Text>
                            </View>
                        </Image>
                ),
            }
        },
        SaleTab: {
            screen: SalePage,
            path: '/sale',
            navigationOptions: {
                tabBarLabel: '拍卖',
                tabBarIcon: ({tintColor,focused}) => (
                    focused
                        ?
                        <Image
                            source={require('./src/image/Tabdown.png')}
                            style={styles.icon}
                        >
                            <View style={styles.tabbarup}>
                                <Text style={styles.tabbarupText}>拍 卖</Text>
                            </View>
                        </Image>
                        :
                        <Image
                            source={require('./src/image/Tabup.png')}
                            style={styles.icon}
                        >
                            <View style={styles.tabbardown}>
                                <Text style={{color:'rgba(255,255,255,.7)',fontSize: 15,fontWeight: 'bold'}}>拍 卖</Text>
                            </View>
                        </Image>
                ),
            }
        },
        UserTab: {
            screen: UserTab,
            path: '/user',
            navigationOptions: {
                tabBarLabel: '用户',
                tabBarIcon:({tintColor,focused}) => (
                    focused
                        ?
                        <Image
                            source={require('./src/image/Tabdown.png')}
                            style={styles.icon}
                        >
                            <View style={styles.tabbarup}>
                                <Text style={styles.tabbarupText}>角色信息</Text>
                            </View>
                        </Image>
                        :
                        <Image
                            source={require('./src/image/Tabup.png')}
                            style={styles.icon}
                        >
                            <View style={styles.tabbardown}>
                                <Text style={{color:'rgba(255,255,255,.7)',fontSize: 15,fontWeight: 'bold'}}>角色信息</Text>
                            </View>
                        </Image>
                ),
            }
        }
    },{
        initialRouteName: 'HomeTab',
        animationEnabled: false,
        swipeEnabled: false,
        tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
        tabBarOptions: {
            pressColor:'rgba(0,0,0,0.1)',
            activeTintColor: '#008AC9', // 文字和图片选中颜色
            inactiveTintColor: '#999', // 文字和图片默认颜色
            showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
            indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
            
            style: {
                backgroundColor: '#211510', // TabBar 背景色
                height:52,
                alignItems:'stretch',
            },
            iconStyle:{
                marginTop: 0,
                height:52,
                width:90
            }
        },

    }
)
const styles = StyleSheet.create({
    icon: {
        height: 40,
        width: 90,
        resizeMode: 'cover'
    },
    tabbarup:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 7,
        marginRight: 7,
        marginBottom: 5,
        backgroundColor: '#211510',
        borderRadius: 2
    },
    tabbarupText:{
        color:'#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    tabbardown:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 7,
        marginRight: 7,
        marginBottom: 5,
        marginTop: 7,
        backgroundColor: '#211510',
        borderRadius: 2
    }
});
export default App;
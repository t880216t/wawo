import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    StatusBar,
    Image,
    TextInput,
    FlatList,
    TouchableOpacity,
    Alert,
    ScrollView
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/lib/views/CardStack/CardStackStyleInterpolator';

//自定义组件
import HomeCell from './home/home_cell';
import HomeDetail from './home/home_detail';
import HTTPUtil from '../compment/HTTPUtil';
//var BASEHOST = 'http://192.168.1.101:5000/'
var BASEHOST = 'http://ownerworld.win:5000/'

class _Mine extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            showWuLiu:false,
        };
    }

    showWuLiu(){
        this.setState({
            showWuLiu:!this.state.showWuLiu,
        })
    }

    render() {

        //导航对象
        const { navigate } = this.props.navigation;

        return (
            <View>
                <View>
                    <Image
                        style={styles.backgroundImage}
                        source={{uri:'https://www.battlenet.com.cn/wow/static/images/profile/sidebar-bg.jpg'}}
                    >
                        <View style={{marginTop: 8,height:200,justifyContent: 'center',alignItems: 'center',backgroundColor: 'rgba(0,0,0,0.3)',flexDirection: 'column'}}>
                            <View style={{margin: 10}}>
                                    <Image
                                        source={{uri:'http://i0.sinaimg.cn/gm/ol/wow2012/zzyh/zr/zr3.jpg'}}
                                        style={{width:100,height:100,borderRadius:68,borderWidth: 2,borderColor: 'white'}}/>
                            </View>
                            <View style={{marginTop: 5}}>
                                <Text style={{color:'#f8b700', fontSize:18}}>未知目标</Text>
                            </View>
                        </View>
                        <View style={{flex:1,marginTop:10,marginBottom: 70}}>
                            <View style={{flexDirection:'row',flex:2}}>
                                <View style={{flex:2,marginBottom: 2,marginRight: 2,marginTop: 2,backgroundColor: 'rgba(0,0,0,0.3)',flexDirection:'row',alignItems: 'center',justifyContent:'center'}}>
                                    <View style={{margin: 10}}>
                                        <Image
                                            source={require('../image/余额.png')}
                                            style={styles.list_image}/>
                                    </View>
                                    <View style={{marginTop: 5}}>
                                        <Text style={styles.list_content}>账户余额</Text>
                                    </View>
                                </View>
                                <View style={{flex:2,marginBottom: 2,marginTop: 2,backgroundColor: 'rgba(0,0,0,0.3)',flexDirection:'row',alignItems: 'center',justifyContent:'center'}}>
                                    <View style={{margin: 10}}>
                                        <Image
                                            source={require('../image/券.png')}
                                            style={styles.list_image}/>
                                    </View>
                                    <View style={{marginTop: 5}}>
                                        <Text style={styles.list_content}>优惠券</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{flexDirection:'row',flex:2}}>
                                <View style={{flex:2,marginBottom: 2,marginRight: 2,backgroundColor: 'rgba(0,0,0,0.3)',flexDirection:'row',alignItems: 'center',justifyContent:'center'}}>
                                    <View style={{margin: 10}}>
                                        <Image
                                            source={require('../image/物流.png')}
                                            style={styles.list_image}/>
                                    </View>
                                    <View style={{marginTop: 5}}>
                                        <Text style={styles.list_content}>物流信息</Text>
                                    </View>
                                </View>
                                <View style={{flex:2,marginBottom: 2,backgroundColor: 'rgba(0,0,0,0.3)',flexDirection:'row',alignItems: 'center',justifyContent:'center'}}>
                                    <View style={{margin: 10}}>
                                        <Image
                                            source={require('../image/地址.png')}
                                            style={styles.list_image}/>
                                    </View>
                                    <View style={{marginTop: 5}}>
                                        <Text style={styles.list_content}>收货地址</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{flexDirection:'row',flex:2}}>
                                <View style={{flex:2,marginBottom: 2,marginRight: 2,backgroundColor: 'rgba(0,0,0,0.3)',flexDirection:'row',alignItems: 'center',justifyContent:'center'}}>
                                    <View style={{margin: 10}}>
                                        <Image
                                            source={require('../image/收藏.png')}
                                            style={styles.list_image}/>
                                    </View>
                                    <View style={{marginTop: 5}}>
                                        <Text style={styles.list_content}>我的收藏</Text>
                                    </View>
                                </View>
                                <View style={{flex:2,marginBottom: 2,backgroundColor: 'rgba(0,0,0,0.3)',flexDirection:'row',alignItems: 'center',justifyContent:'center'}}>
                                    <View style={{margin: 10}}>
                                        <Image
                                            source={require('../image/反馈.png')}
                                            style={styles.list_image}/>
                                    </View>
                                    <View style={{marginTop: 5}}>
                                        <Text style={styles.list_content}>意见反馈</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Image>
                </View>

            </View>
        );
    }
}


const Mine = StackNavigator({
    home: {screen: _Mine,
    },
    detail:{screen: HomeDetail,
    },

},{
    initialRouteName: 'home',
    mode: 'card ',
    headerMode: 'none',
    //解决安卓push无效果
    transitionConfig:()=>({
        screenInterpolator:CardStackStyleInterpolator.forHorizontal,
    })
});

export default Mine;


const styles = StyleSheet.create({
    backgroundImage:{
        flex:1,
        minHeight: Dimensions.get('window').height,
        resizeMode:'cover'
    },
    list_image:{
        width:30,height:30
    },
    list_content:{
        color:'grey', fontSize:17
    }
})
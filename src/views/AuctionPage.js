import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView,
    Image,
    FlatList,
    TouchableOpacity,
    Alert,
    TextInput
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/lib/views/CardStack/CardStackStyleInterpolator';

import HTTPUtil from '../compment/HTTPUtil';
//var BASEHOST = 'http://192.168.1.101:5000/'
var BASEHOST = 'http://ownerworld.win:5000/';
import Swiper from 'react-native-swiper';
import AuctionCell from './auction/auction_cell';
import AuctionDetail from './auction/auction_detail';

var images = [
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507798749&di=2994de6c5a9419046824641f8eaee069&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F16%2F98%2F98%2F98s58PICjCv_1024.jpg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507175233380&di=1169313d6c8d803169a7d1a8a3ee0058&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F17%2F23%2F48%2F07n58PICZTq_1024.jpg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507175233375&di=baf1449cd94ceced200b5caf4a701f2f&imgtype=0&src=http%3A%2F%2Fpic38.nipic.com%2F20140307%2F13484124_100326693196_2.jpg"
];

//坑爹的报错
class AuctionSearchPage extends Component {
    static navigationOptions = {
        tabBarVisible:false,
    };
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            value : [],
            searchKeyWord:'none'
        };
    }

    //获取列表数据
    getprodlist(){
        let formData = new FormData();
        formData.append("prodName",this.state.searchKeyWord)
        HTTPUtil.post(BASEHOST+'getprodlist',formData,'')
            .then((json) => {
                //处理 请求success
                //我们假设业务定义code为0时，数据正常
                console.log(json)
                if (json.msg == '未找到提交记录')
                {
                    Alert.alert('温馨提醒','无相关产品，换个词试试。',[{text:'确定'}])
                }
                else {
                    this.setState({
                        value : json
                    })
                }
            },(err)=>{
                //TODO 处理请求fail
                console.log(err)

            })
    }

    //渲染行数据
    renderItemView(item,navigate){
        return(
            <AuctionCell onSelect={() => navigate('detail',{cellData:{item}})} cellData={item}></AuctionCell>
        );
    }

    //去除警告
    extraUniqueKey(item,index){
        return index+item;
    }

    _onChange(value){
        this.setState({
            searchKeyWord:value
        },()=>{console.log("searchKeyWord",this.state.searchKeyWord)} )
    }

    render() {
        const { navigate } = this.props.navigation;
        const search =
            <View style={styles.searchBox}>
                <View style={{flex:1,marginLeft: 10}}>
                    <Image
                        source={require('../image/shai.png')}
                        style={{height: 25,width: 25}}/>
                </View>

                <View style={{flex:8}}>
                    <TextInput style={[styles.inputText,{color:'white',}]}
                               placeholder="请输入搜索内容"
                               placeholderTextColor="gray"
                               underlineColorAndroid='transparent'
                               keyboardType='default'
                               numberOfLines={1}
                               disableFullscreenUI={true}
                               onChangeText = {(text) =>this._onChange(text)}
                    />
                </View>
                <TouchableOpacity
                    style={{flex:2}}
                    onPress={this.getprodlist.bind(this)}
                >
                    <Image
                        source={require('../image/ButtonUp.png')}
                        style={ {marginLeft:5,width:50,height:30, alignItems:'center',justifyContent:'center',
                            borderWidth:1, borderColor:'#000', borderRadius:3} }
                        resizeMode='cover'
                    >
                        <Text style={{color:this.state.focused?'grey':'#FFCA00', fontFamily:'微软雅黑'}}>搜索</Text>
                    </Image>
                </TouchableOpacity>
            </View>

        return (
            <View>
                <ScrollView>
                    {search}
                    <Image
                        style={styles.searchBackgroundImage}
                        source={{uri:'https://www.battlenet.com.cn/wow/static/images/profile/sidebar-bg.jpg'}}
                    >
                        <View style={{flex:1, marginTop:10,justifyContent: 'center',alignItems: 'center'}}>
                            <FlatList style={{width:Dimensions.get('window').width}}
                                      data = {this.state.value}
                                      renderItem={({item}) => this.renderItemView(item,navigate)}
                                      keyExtractor = {this.extraUniqueKey}//去除警告
                            >

                            </FlatList>
                        </View>
                    </Image>
                </ScrollView>
                <View style={{flex: 1,top: -50, alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity style={{ width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', margin: 20}} onPress={()=>navigate('home')}>
                        <Image source={require('../image/back.png')} style={{height:35,width:35}}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

class _AuctionPage extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            value : [],
            searchKeyWord:''
        };
      }

    componentWillMount() {
        this.getprodlist();
    }

    //获取列表数据
    getprodlist(){
        let formData = new FormData();
        formData.append("prodName",this.state.searchKeyWord)
        HTTPUtil.post(BASEHOST+'getprodlist',formData,'')
            .then((json) => {
                //处理 请求success
                //我们假设业务定义code为0时，数据正常
                console.log(json)
                if (json.msg == '未找到提交记录')
                {
                    Alert.alert('温馨提醒','无相关产品，换个词试试。',[{text:'确定'}])
                }
                else {
                    this.setState({
                        value : json
                    })
                }
            },(err)=>{
                //TODO 处理请求fail
                console.log(err)

            })
    }

    //渲染行数据
    renderItemView(item,navigate){
        return(
            <AuctionCell onSelect={() => navigate('detail',{cellData:{item}})} cellData={item}></AuctionCell>
        );
    }

    //去除警告
    extraUniqueKey(item,index){
        return index+item;
    }

    _onChange(value){
        this.setState({
            searchKeyWord:value
        },()=>{console.log("searchKeyWord",this.state.searchKeyWord)} )
    }

    //轮播图片
    renderImg(){

        var _images = images.map(function (imageUrl) {
            return <Image source={{uri:imageUrl}} style={{flex:1, resizeMode:'cover'}} key={imageUrl}></Image>
        });
        return _images
    }

    render() {
        const _Swiper = this.renderImg();
        const { navigate } = this.props.navigation;
        const search =
            <TouchableOpacity style={styles.searchBox}
                              onPress={() => navigate('search')}
                              activeOpacity={0.8}
            >
                <View style={{flex:1,marginLeft: 10}}>
                    <Image
                        source={require('../image/shai.png')}
                        style={{height: 25,width: 25}}/>
                </View>

                <View style={{flex:8}}>
                    <View style={styles.inputText}
                    />
                </View>
                <View
                    style={{flex:2}}
                >
                    <Image
                        source={require('../image/ButtonUp.png')}
                        style={ {marginLeft:5,width:50,height:30, alignItems:'center',justifyContent:'center',
                            borderWidth:1, borderColor:'#000', borderRadius:3} }
                        resizeMode='cover'
                    >
                        <Text style={{color:this.state.focused?'grey':'#FFCA00', fontFamily:'微软雅黑'}}>搜索</Text>
                    </Image>
                </View>
            </TouchableOpacity>
        return (
                <ScrollView>
                    {search}
                    <Swiper height={200}
                            loop={true}
                        // showsButtons={true}
                            index={0}
                            autoplay={true}
                            horizontal={true}
                    >
                        {_Swiper}
                    </Swiper>
                    <Image
                        style={styles.backgroundImage}
                        source={{uri:'https://www.battlenet.com.cn/wow/static/images/profile/sidebar-bg.jpg'}}
                    >
                        <View style={{flex:1, marginTop:10,justifyContent: 'center',alignItems: 'center'}}>
                            <FlatList style={{width:Dimensions.get('window').width}}
                                      data = {this.state.value}
                                      renderItem={({item}) => this.renderItemView(item,navigate)}
                                      keyExtractor = {this.extraUniqueKey}//去除警告
                            >

                            </FlatList>
                        </View>
                    </Image>
                </ScrollView>
        );
    }
}

const  AuctionPage = StackNavigator({
    home: {screen: _AuctionPage,
    },
    detail:{screen: AuctionDetail,
    },
    search:{screen: AuctionSearchPage,
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

export default AuctionPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    backgroundImage:{
        flex:1,
        height: Dimensions.get('window').height - 200,
        resizeMode:'cover',
    },
    searchBackgroundImage:{
        flex:1,
        height: Dimensions.get('window').height,
        resizeMode:'cover',
    },
    inputText:{
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,  // 设置圆角边
        backgroundColor:'rgba(0,0,0,0.5)'
    },
    searchBox:{//搜索框
        height:50,
        flexDirection: 'row',   // 水平排布
        backgroundColor: '#211510',
        alignItems: 'center',
    },
})
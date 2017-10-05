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
    Alert
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/lib/views/CardStack/CardStackStyleInterpolator';

//自定义组件
import HomeCell from './home/home_cell';
import HomeDetail from './home/home_detail';
import CoustomButton from '../compment/button'

import HTTPUtil from '../compment/HTTPUtil';
//var BASEHOST = 'http://192.168.1.101:5000/'
var BASEHOST = 'http://ownerworld.win:5000/'

class _HomePage extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            value : [],
            searchKeyWord:''
        };
          this.renderItemView = this.renderItemView.bind(this);
      }

      _onChange(value){
          this.setState({
              searchKeyWord:value
          },()=>{console.log("searchKeyWord",this.state.searchKeyWord)} )
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
            <HomeCell onSelect={() => navigate('detail',{cellData:{item}})} cellData={item}></HomeCell>
        );
    }

    //去除警告
    extraUniqueKey(item,index){
        return index+item;
    }

    render() {
        const search =
            <View style={styles.searchBox}>
                <View style={{flex:1,marginLeft: 10}}>
                    <Image
                        source={require('../image/shai.png')}
                        style={{height: 25,width: 25}}/>
                </View>

                <View style={{flex:8}}>
                    <TextInput style={styles.inputText}
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
                        style={ {marginLeft:5, marginTop:5,width:50,height:30, alignItems:'center',justifyContent:'center',
                            borderWidth:1, borderColor:'#000', borderRadius:3} }
                        resizeMode='cover'
                    >
                        <Text style={{color:this.state.focused?'grey':'#FFCA00', fontFamily:'微软雅黑'}}>搜索</Text>
                    </Image>
                </TouchableOpacity>
            </View>

        //给数据追加一个key的字段，不然会有警告的,参数数组中的每一项，需要包含 key 值作为唯一标示

        //导航对象
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#211510'></StatusBar>
                <View>
                <Image
                    style={{height: 50,resizeMode:'cover'}}
                    //source={require('../image/headerBg.png')}
                    source={{uri:'https://www.wowchina.com/static/components/SiteNav/sitenav-bar-user-bg.jpg'}}
                >
                <View style={styles.head}>

                        <View style={styles.titleProfile}>
                            <View style={{flex:1}}>
                                <Image
                                    source={{uri:'https://www.battlenet.com.cn/wow/static/images/character/auction/icon-frame.png'}}
                                    style={styles.AdvImageBox}
                                >
                                    <Image
                                        source={{uri:'http://oi2rzqa3e.bkt.clouddn.com/static/images/11-0.gif'}}
                                        style={styles.AdvImage}/>
                                </Image>
                            </View>
                            <View style={styles.titleName}>
                                <Text style={{color:'#f8b700', fontSize:15}}>未知目标</Text>
                            </View>
                            <View style={{flex:1}}></View>
                        </View>

                </View>
                </Image>
                </View>
                <View style={{backgroundColor: '#211510'}}>
                    <FlatList style={{width:Dimensions.get('window').width}}
                              data = {this.state.value}
                              renderItem={({item}) => this.renderItemView(item,navigate)}
                              keyExtractor = {this.extraUniqueKey}//去除警告
                              ListHeaderComponent = {search}
                    >

                    </FlatList>
                </View>

            </View>
        );
    }
}


const HomePage = StackNavigator({
    home: {screen: _HomePage,
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

export default HomePage;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover'
    },
    head:{
        width:Dimensions.get('window').width,
    },
    titleProfile:{
        flexDirection:'row',
        height:50,
    },
    AdvImageBox:{
        flex:1,
        width:45,
        height:45,
        marginLeft:30,
        marginTop:2,
        marginBottom:2,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    AdvImage:{
        flex:1,
        width:38,
        height:38,
        marginTop: 3,
        marginBottom: 3,
        borderRadius:5
    },
    titleName:{
        flex:3,
        justifyContent:'center',
        alignItems:'center'
    },
    inputText:{
        height: 35,
        fontSize:13,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,  // 设置圆角边
        color:'white',
        backgroundColor:'rgba(0,0,0,0.5)'
    },
    searchBox:{//搜索框
        marginTop: 3,
        height:40,
        flexDirection: 'row',   // 水平排布
        backgroundColor: '#211510',
        alignItems: 'center',
    },
})
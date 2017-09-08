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
    TouchableOpacity
} from 'react-native';

import {SearchBar} from 'antd-mobile';
import {StackNavigator} from 'react-navigation';

//自定义组件
import HomeCell from './home/home_cell';
import HomeDetail from './home/home_detail';

class _HomePage extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            value : '',
            NumberArr:[{name:'1',city:'北京',pic:'http://wowdb60static.wow-classic.com/images/icons/medium/inv_misc_monsterclaw_03.png'},{name:'2',city:'上海',pic:'http://wowdb60static.wow-classic.com/images/icons/medium/inv_misc_monsterclaw_03.png'},{name:'3',city:'深圳',pic:'http://wowdb60static.wow-classic.com/images/icons/medium/inv_misc_monsterclaw_03.png'},{name:'4',city:'广州'},{name:'5',city:'杭州'},{name:'6',city:'苏州',pic:'http://wowdb60static.wow-classic.com/images/icons/medium/inv_misc_monsterclaw_03.png'},{name:'7',city:'沧州'},{name:'8',city:'邢台'},{name:'9',city:'邯郸'},{name:'10',city:'保定'},{name:'11',city:'石家庄'},{name:'12',city:'山东'},{name:'13',city:'潍坊'},{name:'14',city:'锦州'},{name:'15',city:'固州'},{name:'16',city:'西安'},{name:'17',city:'袁州'},{name:'18',city:'江西'},{name:'19',city:'承德'},{name:'20',city:'秦皇岛'},{name:'21',city:'唐山'},{name:'22',city:'廊坊'},{name:'23',city:'吕梁'},{name:'24',city:'衡水'},{name:'25',city:'山西'},{name:'26',city:'太原'},{name:'27',city:'朔州'},{name:'28',city:'大同'},{name:'29',city:'阳泉'},{name:'30',city:'长治'},{name:'31',city:'晋城'},{name:'32',city:'忻州'},{name:'33',city:'晋中'},{name:'34',city:'临汾'},{name:'35',city:'运城'},{name:'35',city:'包头'},{name:'37',city:'乌海'},{name:'38',city:'赤峰'},{name:'39',city:'沈阳'},{name:'40',city:'通辽'},{name:'41',city:'朝阳'},{name:'42',city:'阜新'},{name:'43',city:'抚顺'},{name:'44',city:'本溪'},{name:'45',city:'辽阳'},{name:'46',city:'鞍山'},{name:'47',city:'丹东'},{name:'48',city:'大连'},{name:'49',city:'营口'},{name:'50',city:'盘锦'},{name:'51',city:'白城'},{name:'52',city:'长春'},{name:'53',city:'吉林'},{name:'54',city:'四平'},{name:'55',city:'辽源'},{name:'56',city:'大庆'},{name:'57',city:'鹤岗'},{name:'58',city:'伊春'},{name:'59',city:'南京'},{name:'60',city:'鸡西'},{name:'61',city:'徐州'},{name:'62',city:'绥化'},{name:'63',city:'宿迁'},{name:'64',city:'淮安'},{name:'65',city:'扬州'},{name:'66',city:'泰州'},{name:'67',city:'南通'},{name:'68',city:'镇江'},{name:'69',city:'常州'},{name:'70',city:'无锡'}],
        };
          this.renderItemView = this.renderItemView.bind(this);
      }

      onChange(value){
          this.setState({
              value:value
          },()=>{console.log("value",this.state.value)} )
      }

    //点击城市cell
    cityClicked(item){
        alert(item.city);
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
                               disableFullscreenUI={false}
                               onChange = {(text) => {this.onChange(text)}}
                               />
                </View>
                <View style={{flex:1,marginLeft: 5}}>
                    <Text style={{color:'white'}}>搜索</Text>
                </View>
            </View>

        //给数据追加一个key的字段，不然会有警告的,参数数组中的每一项，需要包含 key 值作为唯一标示

        //导航对象
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#211510'></StatusBar>
                <Image
                    style={{height: 50,resizeMode:'cover'}}
                    source={{uri:'https://www.battlenet.com.cn/wow/static/images/content/table-options-bg.jpg'}}
                >
                <View style={styles.head}>

                        <View style={styles.titleProfile}>
                            <View style={{flex:1}}>
                                <Image
                                    source={{uri:'http://oi2rzqa3e.bkt.clouddn.com/static/images/11-0.gif'}}
                                    style={styles.AdvImage}/>
                            </View>
                            <View style={styles.titleName}>
                                <Text style={{color:'#f8b700', fontSize:15}}>未知目标</Text>
                            </View>
                            <View style={{flex:1}}></View>
                        </View>

                </View>
                </Image>
                <Image
                    style={styles.backgroundImage}
                    source={{uri:'https://www.battlenet.com.cn/wow/static/images/profile/sidebar-bg.jpg'}}
                >
                    <FlatList style={{width:Dimensions.get('window').width}}
                              data = {this.state.NumberArr}
                              renderItem={({item}) => this.renderItemView(item,navigate)}
                              keyExtractor = {this.extraUniqueKey}//去除警告
                              ListHeaderComponent = {search}
                    >

                    </FlatList>
                </Image>

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
    mode: 'card',
    headerMode:'none',
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
    AdvImage:{
        flex:1,
        width:40,
        height:40,
        marginLeft:30,
        marginTop:5,
        marginBottom:5,
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
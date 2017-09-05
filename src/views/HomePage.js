import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    StatusBar,
    Image,
    TextInput
} from 'react-native';

//antd搜索组件
import {SearchBar} from 'antd-mobile';

export default class HomePage extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            value : ''
        };
      }

      onChange(value){
          this.setState({
              value:value
          },()=>{console.log("value",this.state.value)} )
      }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#211510'></StatusBar>
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
                    <View style={styles.searchBox}>
                        <Text>筛选</Text>
                        <View>
                            <TextInput style={styles.inputText}
                                       underlineColorAndroid='transparent'
                                       keyboardType='web-search'
                                       placeholder='搜索' />
                        </View>
                    </View>
                </View>
                <View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    head:{
        flex:1,
        width:Dimensions.get('window').width,
    },
    titleProfile:{
        flexDirection:'row',
        height:50,
        backgroundColor:'#211510'
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
        fontSize:14,height:40, flex:1, borderColor: 'gray',borderWidth: 1
    },
    searchBox:{//搜索框
        height:40,
        flexDirection: 'row',   // 水平排布
        borderRadius: 5,  // 设置圆角边
        backgroundColor: 'gray',
        alignItems: 'center',
    },
})
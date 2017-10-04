import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

import HTTPUtil from '../../compment/HTTPUtil';
var BASEHOST = 'http://192.168.1.101:5000/'

export default class SaleDetail extends Component {
    static navigationOptions = {
        tabBarVisible:false,
    };
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            chense:0,
            createTime : "",
            description:"",
            id : 0,
            imageUrls : "",
            price:0,
            state:0,
            title:"0",
            titleImage :"0"
        };
      }

    componentWillMount() {
        const {params} = this.props.navigation.state;
        const {item} = params.cellData;
        this.getDetails(item)

    }

    showImage (){
        if (this.state.imageUrls != ""){
            const _images = this.state.imageUrls.split(",")
            return(
                _images.map((image)=>{
                    <Image style={{width: 320, height: 320,marginTop: 5}} source={{uri:image}} key={image}></Image>
                })
            )
        }else {
            return (<View/>)
        }
    }

    getDetails(item){
        let formData = new FormData();
        formData.append("prodId",item.id)
        HTTPUtil.post(BASEHOST+'getproddetail',formData,'')
            .then((json) => {
                //处理 请求success
                //我们假设业务定义code为0时，数据正常
                if(json){
                    this.setState({
                        chense:json[0].chense,
                        createTime : json[0].createTime,
                        description:json[0].description,
                        id : json[0].id,
                        imageUrls : json[0].imageUrls,
                        price:json[0].price,
                        state:json[0].state,
                        title:json[0].title,
                        titleImage :json[0].titleImage
                    })
                }
            },(err)=>{
                //TODO 处理请求fail
                console.log(err)

            })
    }

    render() {

        return (
            <View>
                <ScrollView>
                    <Image
                        style={styles.backgroundImage}
                        source={{uri:'https://www.battlenet.com.cn/wow/static/images/profile/sidebar-bg.jpg'}}
                    >
                        <View style={{flex:1,margin: 8,borderRadius: 8,backgroundColor: 'rgba(0,0,0,0.3)'}}>
                            <View style={{margin: 10,flexDirection: 'row'}}>
                                <View style={{flex:2}}>
                                    <Image source={require('../../image/Empty.png')} style={{height: 90,width: 90,justifyContent: 'center',alignItems: 'center'}}>
                                        <Image source={{uri:this.state.titleImage}} style={{height: 52,width: 52,borderRadius: 5,marginRight: 1,marginBottom: 2}}></Image>
                                    </Image>
                                </View>
                                <View style={{flex:5,justifyContent:'center'}}>
                                    <Text style={{color: 'white'}}>{this.state.title}</Text>
                                </View>
                            </View>

                            <View style={{marginLeft:10,flexDirection: 'column',backgroundColor: 'rgba(0,0,0,0)'}}>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{marginLeft: 15,flex:2,justifyContent:'center'}}>
                                        <Text style={{color:'#c09a67',fontSize: 15}}>出售价格:</Text>
                                    </View>
                                    <View style={{marginLeft: 15,borderRadius: 3,justifyContent:'center',flex:7,marginRight: 10}}>
                                        <Text style={{backgroundColor: 'black',borderRadius:5,color: 'black',height:40,color: 'white'}}>
                                            {this.state.price}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row',marginTop:10}}>
                                    <View style={{marginLeft: 15,justifyContent:'center'}}>
                                        <Text style={{color:'#c09a67',fontSize: 15,alignItems: 'flex-end'}}>        成色:</Text>
                                    </View>
                                    <View style={{marginLeft: 15,height:40,justifyContent:'center',padding: 5,backgroundColor: 'black',borderRadius: 3,flexDirection:'row'}}>
                                        <Text
                                            style={{backgroundColor: 'black',borderRadius: 3,justifyContent:'center'}}>
                                            {this.state.chense}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row',marginTop:10}}>
                                    <View style={{marginLeft: 15,justifyContent:'flex-start',flex:2}}>
                                        <Text style={{color:'#c09a67',fontSize: 15}}>物品描述:</Text>
                                    </View>
                                    <View style={{borderRadius: 3,justifyContent:'flex-start',marginRight: 10,flex:6}}>
                                        <Text style={{backgroundColor: 'black',borderRadius:5,minHeight:100,color: '#1EFF00'}}>
                                            {this.state.description}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{margin: 10}}>
                                    <Text style={{color:'#c09a67',fontSize: 15,marginTop: 10,marginLeft: 5}}>添加图片:</Text>

                                    <View style={{marginTop: 10,alignItems: 'center', justifyContent: 'center',backgroundColor: 'black',}}>
                                        {this.showImage.bind(this)}
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity
                                style={{justifyContent:'center',flex:1,alignItems: 'center',margin: 10}}
                            >
                                <Image source={require('../../image/_button.png')} style={{height: 50,justifyContent: 'center'}}>
                                    <Text style={{color:'#ffae00',fontSize: 18,textAlign: 'center'}}>提交</Text>
                                </Image>
                            </TouchableOpacity>
                        </View>
                    </Image>
                </ScrollView>
                <View style={{flex: 1,top: -50, alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity style={{ width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', margin: 20}} onPress={()=>{this.props.navigation.goBack()}}  >
                        <Image source={require('../../image/back.png')} style={{height:35,width:35}}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    backgroundImage:{
        flex:1,
        height: Dimensions.get('window').height,
        resizeMode:'cover'
    },
})
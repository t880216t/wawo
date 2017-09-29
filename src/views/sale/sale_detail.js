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

export default class SaleDetail extends Component {
    static navigationOptions = {
        tabBarVisible:false,
    };

    showImage = (images) =>{
        if (images){
            return(
                images.map((image)=>{
                    <Image style={{width: 320, height: 320,marginTop: 5}} source={{uri:image}} key={image}></Image>
                })
            )
        }else {
            return (<View/>)
        }
    }

    render() {
        const {params} = this.props.navigation.state;
        const {item} = params.cellData;
        let Images = this.showImage(item.imageUrls);
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
                                        <Image source={{uri:item.titleImage}} style={{height: 52,width: 52,borderRadius: 5,marginRight: 1,marginBottom: 2}}></Image>
                                    </Image>
                                </View>
                                <View style={{flex:5,justifyContent:'center'}}>
                                    <Text style={{color: 'white'}}>{item.title}</Text>
                                </View>
                            </View>

                            <View style={{marginLeft:10,flexDirection: 'column',backgroundColor: 'rgba(0,0,0,0)'}}>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{marginLeft: 15,flex:2,justifyContent:'center'}}>
                                        <Text style={{color:'#c09a67',fontSize: 15}}>出售价格:</Text>
                                    </View>
                                    <View style={{marginLeft: 15,borderRadius: 3,justifyContent:'center',flex:7,marginRight: 10}}>
                                        <Text style={{backgroundColor: 'black',borderRadius:5,color: 'black',height:40,color: 'white'}}>
                                            {item.price}
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
                                            {item.chense}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row',marginTop:10}}>
                                    <View style={{marginLeft: 15,justifyContent:'flex-start',flex:2}}>
                                        <Text style={{color:'#c09a67',fontSize: 15}}>物品描述:</Text>
                                    </View>
                                    <View style={{borderRadius: 3,justifyContent:'flex-start',marginRight: 10,flex:6}}>
                                        <Text style={{backgroundColor: 'black',borderRadius:5,minHeight:100,color: '#1EFF00'}}>
                                            {item.description}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{flex:1,margin: 10}}>
                                    <Text style={{color:'#c09a67',fontSize: 15,marginTop: 10,marginLeft: 5}}>添加图片:</Text>

                                    <View style={{marginTop: 10,alignItems: 'center', justifyContent: 'center',backgroundColor: 'black',}}>
                                        {Images}
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
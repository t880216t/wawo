import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';

//下拉框控件
import ModalDropdown from 'react-native-modal-dropdown';

export default class SaleAdd extends Component {
    static navigationOptions = {
        tabBarVisible:false,
    };

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
                                        <Image source={require('../../image/Empty.png')} style={{height: 90,width: 90}}></Image>
                                    </View>
                                    <View style={{flex:5,justifyContent:'center'}}>
                                        <TextInput style={{height: 40,backgroundColor: 'black',borderRadius:5,color: 'white'}}
                                                   underlineColorAndroid='transparent'
                                                   keyboardType='default'
                                                   numberOfLines={2}
                                                   disableFullscreenUI={false}
                                                   placeholder="请输入物品名称"
                                                   placeholderTextColor="grey"
                                                   maxLength={16}
                                                   clearButtonMode="while-editing"
                                        />
                                    </View>
                                </View>
                                <View style={{marginLeft:10,flexDirection: 'column',backgroundColor: 'rgba(0,0,0,0)'}}>
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={{marginLeft: 15,flex:2,justifyContent:'center'}}>
                                            <Text style={{color:'#c09a67',fontSize: 15}}>出售价格:</Text>
                                        </View>
                                        <View style={{marginLeft: 15,borderRadius: 3,justifyContent:'center',flex:7,marginRight: 10}}>
                                            <TextInput style={{backgroundColor: 'black',borderRadius:5,color: 'black',height:40,color: 'white'}}
                                                       underlineColorAndroid='transparent'
                                                       keyboardType='numeric'
                                                       numberOfLines={1}
                                                       disableFullscreenUI={false}
                                                       placeholder="请输入物品转手价格"
                                                       placeholderTextColor="grey"
                                                       maxLength={11}
                                                       clearButtonMode="while-editing"
                                            />
                                        </View>
                                    </View>
                                    <View style={{flexDirection: 'row',marginTop:10}}>
                                        <View style={{marginLeft: 15,justifyContent:'center'}}>
                                            <Text style={{color:'#c09a67',fontSize: 15}}>物品成色:</Text>
                                        </View>
                                        <View style={{marginLeft: 15,height:40,justifyContent:'center',padding: 5,backgroundColor: 'black',borderRadius: 3,flexDirection:'row'}}>
                                            <ModalDropdown
                                                options={['全    新', '九成新', '八成新', '七成新', '六成新']}
                                                textStyle={{fontSize: 15,color: 'white'}}
                                                style={{backgroundColor: 'black',borderRadius: 3,justifyContent:'center'}}
                                                dropdownStyle={{borderRadius: 3}}
                                                dropdownTextStyle={{fontSize:14,backgroundColor:'black'}}
                                                defaultValue="请选择"

                                            />
                                            <Image
                                                source={{uri:'http://wowdb60static.wow-classic.com/assets/drop-0a71ed0288bbd1c8e5386e36cef679e291c22feb5204c0677b1e704db695411e.png'}}
                                                style={{height: 12,width: 16,alignSelf: 'center',}}
                                            ></Image>
                                        </View>
                                    </View>
                                    <View style={{flexDirection: 'column',marginTop:10}}>
                                        <View style={{marginLeft: 15,justifyContent:'center'}}>
                                            <Text style={{color:'#c09a67',fontSize: 15}}>物品描述:</Text>
                                        </View>
                                        <View style={{marginLeft: 15,borderRadius: 3,justifyContent:'flex-start',marginRight: 10}}>
                                            <TextInput style={{backgroundColor: 'black',marginTop:10,borderRadius:5,color: 'black',height:100,color: 'white',justifyContent:'flex-start'}}
                                                       underlineColorAndroid='transparent'
                                                       keyboardType='numbers-and-punctuation'
                                                       multiline={true}
                                                       disableFullscreenUI={false}
                                                       textAlignVertical ='top'
                                                       placeholder="请输入物品的描述信息"
                                                       placeholderTextColor="grey"
                                                       maxLength={500}
                                                       clearButtonMode="while-editing"
                                            />
                                        </View>
                                    </View>
                                </View>
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
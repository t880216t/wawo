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
                                                   placeholder="物品名称"
                                                   placeholderTextColor="grey"
                                                   maxLength={16}
                                                   clearButtonMode="while-editing"
                                        />
                                    </View>
                                </View>
                                <View style={{margin: 10,height:40,alignItems:'center',flexDirection: 'row',backgroundColor: 'rgba(0,0,0,0.3)'}}>
                                    <View style={{marginLeft: 15}}>
                                        <Text style={{color:'#a1a1a1',fontSize: 15}}>物品成色:</Text>
                                    </View>
                                    <View style={{marginLeft: 30}}>
                                        <ModalDropdown
                                            options={['全新', '九成新', '八成新', '七成新', '六成新']}
                                            textStyle={{color:'#fff',fontSize: 14}}
                                            defaultValue="请选择"
                                        />
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
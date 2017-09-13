import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';

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
                            <View style={{flex:1,margin: 8,borderRadius: 8,backgroundColor: 'rgba(0,0,0,0.3)',justifyContent: 'center',alignItems: 'center'}}>
                                <Image source={require('../../image/add.png')} style={{height: 50,width: 50}}></Image>
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
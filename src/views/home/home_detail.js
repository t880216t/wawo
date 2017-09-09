
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';

export default class HomeDetail extends Component {
    static navigationOptions = {
        tabBarVisible:false,
    };

    render() {
        var {params} = this.props.navigation.state;
        var {item} = params.cellData;
        console.log (params.cellData)
        return (
            <View>
                <ScrollView>
                    <Image
                        style={styles.backgroundImage}
                        source={{uri:'https://www.battlenet.com.cn/wow/static/images/profile/sidebar-bg.jpg'}}
                    >
                        <View style={{flex:1,marginLeft:10,justifyContent: 'center',alignItems: 'center'}}>
                            <Text style={{fontSize:15,color: '#c600ff',}}>
                                {item.city}
                            </Text>
                        </View>
                    </Image>
                </ScrollView>
                <View style={{flex: 1,top: -50, alignSelf: 'flex-start', justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity style={{ width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', margin: 20}} onPress={()=>{this.props.navigation.goBack()}}  >
                        <Image source={require('../../image/back.png')} style={{height:35,width:35}}></Image>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    backgroundImage:{
        flex:1,
        height: Dimensions.get('window').height,
        resizeMode:'cover'
    },
});


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView,
    Image
} from 'react-native';

export default class SaleAdd extends Component {
    render() {
        return (
            <ScrollView>
                <Image
                    style={styles.backgroundImage}
                    source={{uri:'https://www.battlenet.com.cn/wow/static/images/profile/sidebar-bg.jpg'}}
                >
                    <View style={{flex:1,marginLeft:10,justifyContent: 'center',alignItems: 'center'}}>
                        <Text style={{fontSize:15,color: '#c600ff',}}>
                            SaleAdd
                        </Text>
                    </View>
                </Image>
            </ScrollView>
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
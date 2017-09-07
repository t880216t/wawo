
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
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


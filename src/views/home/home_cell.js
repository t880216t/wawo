
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';

export default class HomeCell extends Component {

    render() {
        let {cellData} = this.props;
        return (
            <TouchableOpacity
                style={styles.cell_box}
                onPress={this.props.onSelect}
            >
                <View style={styles.cell_box_box}>
                    <View style={{flex:2,margin: 10}}>
                        <Image source={{uri:'http://wowdb60static.wow-classic.com/images/icons/medium/inv_misc_monsterclaw_03.png'}}
                               style={{height:60,width: 60}}
                        />
                    </View>
                    <View style={{flex:7,justifyContent: 'center'}}>
                        <Text style={styles.cell_conntent}>{cellData.city}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    cell_box:{
        flex:1,
        height:80,
    },
    cell_box_box:{
        flexDirection: 'row',
        backgroundColor:'rgba(0,0,0,0.3)',
        height:78,
        justifyContent: 'center',
    },
    cell_conntent:{
        fontSize: 15,
        color:'#c600ff'
    },
})
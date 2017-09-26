
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

export default class SaleCell extends Component {

    render() {
        let {cellData} = this.props;
        return (
            <View>
                <TouchableOpacity
                    style={styles.cell_box}
                    onPress={this.props.onSelect}
                >
                    <View style={styles.cell_box_box}>
                        <View style={{flex:2}}>
                            <Image source={require('../../image/Empty.png')} style={{height: 90,width: 90,justifyContent: 'center',alignItems: 'center'}}>
                                <Image source={{uri:cellData.titleImage}}
                                       style={{height:53,width: 53,borderRadius: 5,marginRight:1,marginBottom: 1}}
                                />
                            </Image>
                        </View>
                        <View style={{flex:7,justifyContent: 'center'}}>
                            <Text style={styles.cell_conntent}>{cellData.title}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{height: 1,width: Dimensions.get('window').width,backgroundColor: 'rgba(0,0,0,0.2)'}}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cell_box:{
        flex:1,
        height:95,
        justifyContent: 'center',
        alignItems:'center'
    },
    cell_box_box:{
        marginLeft: 5,
        marginRight: 5,
        flexDirection: 'row',
        backgroundColor:'rgba(0,0,0,0.3)',
        height:93,
        borderRadius:5
    },
    cell_conntent:{
        fontSize: 15,
        color:'#c600ff'
    },
})
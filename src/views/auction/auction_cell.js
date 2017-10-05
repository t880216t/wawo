
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

export default class AuctionCell extends Component {
    timeImage = (cellData) => {
        prodTime = cellData.createTime
        //formatTime = (new Date(prodTime)).toISOString().slice(0,10);
        formatTime = (new Date(prodTime));
        currentTime = (new Date());
        var diffTime = ((currentTime - formatTime) / (24 * 3600 * 1000)).toFixed(1)
        if(diffTime >= 15){
            return <Image source={{uri:'https://www.battlenet.com.cn/wow/static/images/character/auction/time-verylong.png'}} style={{height:20,width: 20}}></Image>
        }if(diffTime >= 10){
            return <Image source={{uri:'https://www.battlenet.com.cn/wow/static/images/character/auction/time-long.png'}} style={{height:20,width: 20}}></Image>
        }if(diffTime >= 5){
            return <Image source={{uri:'https://www.battlenet.com.cn/wow/static/images/character/auction/time-medium.png'}} style={{height:20,width: 20}}></Image>
        }else {
            return <Image source={{uri:'https://www.battlenet.com.cn/wow/static/images/character/auction/time-short.png'}} style={{height:20,width: 20}}></Image>
        }

    }

    render() {
        let {cellData} = this.props;
        var time = this.timeImage(cellData);
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
                            <View style={{marginLeft: 10,flex:1,flexDirection: 'column'}}>
                                <View style={styles.cell_conntent}>
                                    <View style={{flex:8}}>
                                        <Text style={{fontSize: 15,color:'#c600ff'}}>{cellData.title}</Text>
                                    </View>
                                    <View style={{flex:1,margin: 5}}>
                                        {time}
                                    </View>
                                </View>
                                <View style={styles.cell_more}>
                                    <Text style={styles.cell_price}>¥ <Text >{cellData.price}</Text></Text>
                                    <TouchableOpacity style={{flex:3,alignItems:'flex-end',marginRight: 10}}
                                                      onPress={this.props.onSelect}
                                    >
                                        <Image source={require('../../image/normal.png')} style={{height:25,width: 100,justifyContent:'center',alignItems: 'center'}}
                                               resizeMode="stretch">
                                            <Text style={{color:'#ffb100'}}>竞拍</Text>
                                        </Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
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
        flex:2,
        marginTop:10,
        flexDirection:'row'
    },
    cell_price:{
        flex:2,
        color:'#c28a13',
        marginTop:5
    },
    cell_more:{
        flex:2,
        flexDirection:'row'
    }
})
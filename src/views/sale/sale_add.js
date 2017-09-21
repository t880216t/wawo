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
//照片组件
import ImagePicker from 'react-native-image-crop-picker';

var ims = [];

export default class SaleAdd extends Component {
    static navigationOptions = {
        tabBarVisible:false,
    };

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            imageUrls:[],
            titleImage:'',
            titleContent:'',
            price:0,
            condition:10,
            desc:''
        };
      }

    _openPicker(){
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: false
        }).then(image => {
            ims.push(image['path'])
            this.setState({
                imageUrls: ims
            })
        }).catch(error  => {
            console.log('There has been a problem with your fetch operation: '+ error.message);
        });
    }

    //title缩略图
    titleOpenPicker(){
        ImagePicker.openPicker({
            width: 90,
            height: 90,
            cropping: true
        }).then(image => {
            this.setState({
                titleImage: image['path']
            })
        }).catch(error  => {
            console.log('There has been a problem with your fetch operation: '+ error.message);
        });
    }

    //显示图片详情
    showImage(){
        return (
            this.state.imageUrls.map((imageUrl)=>(
                <Image style={{width: 320, height: 320,marginTop: 5}} source={{uri:imageUrl}} key={imageUrl}></Image>
            ))
        )
    }

    //提交数据
    submit(){
        console.log('all:',this.state)
    }

    render() {
        let Images = this.showImage();
        return (
            <View>
                <ScrollView>
                    <Image
                        style={styles.backgroundImage}
                        source={{uri:'https://www.battlenet.com.cn/wow/static/images/profile/sidebar-bg.jpg'}}
                    >
                            <View style={{flex:1,margin: 8,borderRadius: 8,backgroundColor: 'rgba(0,0,0,0.3)'}}>
                                <View style={{margin: 10,flexDirection: 'row'}}>
                                    <TouchableOpacity style={{flex:2}} onPress={this.titleOpenPicker.bind(this)}>
                                        {this.state.titleImage == ''?
                                            <Image source={require('../../image/Empty.png')} style={{height: 90,width: 90}}></Image>
                                            :
                                            <Image source={require('../../image/Empty.png')} style={{height: 90,width: 90,justifyContent: 'center',alignItems: 'center'}}>
                                                <Image source={{uri:this.state.titleImage}} style={{height: 52,width: 52,borderRadius: 5,marginRight: 1,marginBottom: 2}}></Image>
                                            </Image>
                                        }
                                    </TouchableOpacity>
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
                                                   onChangeText={(value)=>{this.setState({titleContent:value})}}
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
                                                       onChangeText={(value)=>{this.setState({price:value})}}
                                            />
                                        </View>
                                    </View>
                                    <View style={{flexDirection: 'row',marginTop:10}}>
                                        <View style={{marginLeft: 15,justifyContent:'center'}}>
                                            <Text style={{color:'#c09a67',fontSize: 15,alignItems: 'flex-end'}}>        成色:</Text>
                                        </View>
                                        <View style={{marginLeft: 15,height:40,justifyContent:'center',padding: 5,backgroundColor: 'black',borderRadius: 3,flexDirection:'row'}}>
                                            <ModalDropdown
                                                options={['全    新', '九成新', '八成新', '七成新', '六成新', '五成新', '四成新', '三成新', '二成新','老古董']}
                                                textStyle={{fontSize: 15,color: 'white'}}
                                                style={{backgroundColor: 'black',borderRadius: 3,justifyContent:'center'}}
                                                dropdownTextStyle={{fontSize:14}}
                                                defaultValue="请选择"
                                                onSelect={(index,value)=>{this.setState({condition:index})}}
                                            />
                                            <Image
                                                source={{uri:'http://wowdb60static.wow-classic.com/assets/drop-0a71ed0288bbd1c8e5386e36cef679e291c22feb5204c0677b1e704db695411e.png'}}
                                                style={{height: 12,width: 16,alignSelf: 'center',}}
                                            ></Image>
                                        </View>
                                    </View>
                                    <View style={{flexDirection: 'row',marginTop:10}}>
                                        <View style={{marginLeft: 15,justifyContent:'flex-start',flex:2}}>
                                            <Text style={{color:'#c09a67',fontSize: 15}}>物品描述:</Text>
                                        </View>
                                        <View style={{borderRadius: 3,justifyContent:'flex-start',marginRight: 10,flex:6}}>
                                            <TextInput style={{backgroundColor: 'black',borderRadius:5,minHeight:100,color: '#1EFF00'}}
                                                       underlineColorAndroid='transparent'
                                                       keyboardType='numbers-and-punctuation'
                                                       multiline={true}
                                                       disableFullscreenUI={false}
                                                       textAlignVertical ='top'
                                                       placeholder="请输入物品的描述信息"
                                                       placeholderTextColor="grey"
                                                       maxLength={500}
                                                       clearButtonMode="while-editing"
                                                       onChangeText={(value)=>{this.setState({desc:value})}}
                                            />
                                        </View>
                                    </View>
                                    <View style={{flex:1,margin: 10}}>
                                        <Text style={{color:'#c09a67',fontSize: 15,marginTop: 10,marginLeft: 5}}>添加图片:</Text>

                                        <View style={{marginTop: 10,alignItems: 'center', justifyContent: 'center',backgroundColor: 'black',}}>
                                            {Images}
                                        </View>
                                        {this.state.imageUrls.length<6?
                                            <TouchableOpacity style={{alignItems:'center',height: 200,justifyContent:'center'}}
                                                              onPress={this._openPicker.bind(this)}>
                                                <Image source={require('../../image/addImage.png')} style={{height: 50,width: 50}}></Image>
                                            </TouchableOpacity>
                                            :
                                            <View/>
                                        }

                                    </View>
                                </View>
                                <TouchableOpacity
                                    style={{justifyContent:'center',flex:1,alignItems: 'center',margin: 10}}
                                    onPress={this.submit.bind(this)}
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
        minHeight: Dimensions.get('window').height,
        resizeMode:'cover'
    },
})
import React,{Component} from 'react';
import {Image,TouchableOpacity, Text} from 'react-native';

export default class ButtonItem extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            focused:false
        };
      }

    _onpressIn(){
        this.setState({
          focused:true
        })
    }

    _onpressOut(){
        this.setState({
            focused:false
        })
    }

    render() {
        return(
            <TouchableOpacity
                onPressIn={this._onpressIn.bind(this)}
                onPressOut={this._onpressOut.bind(this)}
                style={{height:40}}
                activeOpacity={0.3}

            >
                <Image source={ this.state.focused ? this.props.selectedImage : this.props.normalImage }
                       style={ {marginLeft:5, marginTop:5,width:50,height:30, alignItems:'center',justifyContent:'center',
                           borderWidth:1, borderColor:'#000', borderRadius:3} }
                       resizeMode='cover'

                >
                    <Text style={{color:this.state.focused?'grey':'#FFCA00', fontFamily:'微软雅黑'}}>{this.props.content}</Text>
                </Image>
            </TouchableOpacity>
        )
    }

}
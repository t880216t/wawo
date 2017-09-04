import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';

//antd搜索组件
import {SearchBar} from 'antd-mobile';

export default class HomePage extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            value : ''
        };
      }

      onChange(value){
          this.setState({
              value:value
          },()=>{console.log("value",this.state.value)} )
      }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.head}>
                    <SearchBar
                        value={this.state.value}
                        placeholder="搜索"
                        onSubmit={value => console.log(value, 'onSubmit')}
                        onClear={value => console.log(value, 'onClear')}
                        onFocus={() => console.log('onFocus')}
                        onBlur={() => console.log('onBlur')}
                        onCancel={() => console.log('onCancel')}
                        showCancelButton
                        onChange={value => {this.onChange(value)}}
                    />
                </View>
                <Text>home</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    head:{
        width:Dimensions.get('window').width,
        backgroundColor:'red',
        alignItems:'center',
    }
})
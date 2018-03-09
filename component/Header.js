import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
} from 'react-native';

class Header extends Component{
    render() {
        return(
            <View>
                <Text>First App</Text>
                <Image
                    style={{width: 40, height: 40}}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                />
            </View>
        )
    }
}

export default Header
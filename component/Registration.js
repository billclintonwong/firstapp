import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
} from 'react-native';

class Registration extends Component {
    render() {
        return (
            <View>
                <Text>User Name</Text>
                <Textinput keyboardType= "email-address"/>
                <Text>Password</Text>
                <Textinput keyboardType=" default"/>
            </View>
        )
    }
}

const style= StyleSheet.create(
    {
        viewStyle: {
            backgroundColor: 'white',
            justifyContent: 'center',
            alignment: 'center',
            height: 50,
            paddingTop: 20
        },
        textStyle: {
            backgroundColor: 'blue',
            fontSize: 20,
        }
    })

export default Registration

import React from "react";
import {View,
        StyleSheet, 
        TouchableOpacity,
        TextInput,
        Text,
        Alert,
        Image,
        KeyboardAvoidingView
    } from 'react-native'

        const Log = require("../assets/Login Logo.png")

    export default class Login extends Component{
        render(){ return (
                <View>
                    <Image source={Log}></Image>
                </View>
        )
            
        }
        
    }
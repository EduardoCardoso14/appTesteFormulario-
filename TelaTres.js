import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import estilo from './style/style.js';
import Menu from './Menu';

function TelaTres({ navigation }) {
    return (
        <View style={estilo.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={estilo.touchaslamn}>
                    <Text> Clique na imagem (Se for capaz) </Text>
                    <Image source={require('./assets/rocket.gif')} style={estilo.img}></Image>
                </TouchableOpacity>
                <Menu></Menu>
                <StatusBar style="auto" />
        </View>
    );
}
export default TelaTres;
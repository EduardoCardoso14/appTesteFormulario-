import React from 'react';
import { View, Text, Button, ImageBackground, Image, TouchableOpacity } from 'react-native';
import estilo from './style/style.js';
import { useNavigation } from '@react-navigation/native';

function Menu() {
    const navigation = useNavigation();
    return (
        <View style={estilo.menu}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={require('./assets/iconintest.png')} style={estilo.iconmenu}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Aslamn')}>
                <Image source={require('./assets/iconcereb.png')} style={estilo.iconmenu}></Image>
            </TouchableOpacity>
        </View>
    );
}
export default Menu;           
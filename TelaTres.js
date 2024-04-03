import React, { createContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Image, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import estilo from './style/style.js';
import Menu from './Menu';

function TelaTres({ navigation }) {
    const [select, setSelected] = useState(0);
    const [v1, setV1] = useState('');
    const [v2, setV2] = useState('');

    const handlePress = () => {
        Alert.alert(
            'Login:',
            'Senha:',
            [
                {
                    text: 'Faz dnv', onPress: () =>
                        navigation.navigate("TelaTres")
                },
            ]
        );
    }

    return (
        <View style={estilo.container}>
            <View style={estilo.ngcdoview}>
                <Text>Login: {v1}</Text>
                <Text>Senha: {v2}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={estilo.touchaslamn}>
                <Text> Clique na imagem (Se for capaz) </Text>
                <Image source={require('./assets/rocket.gif')} style={estilo.img}></Image>
            </TouchableOpacity>
            <View style={estilo.areaTexto}>
                <TextInput
                    onChangeText={setV1}
                    underlineColorAndroid="transparent"
                    placeholder='Login'
                    placeholderTextColor="gray"
                    numberOfLines={10}
                    multiline={true}></TextInput>
            </View>
            <View style={estilo.areaTexto}>
                <TextInput
                    onChangeText={setV2}
                    underlineColorAndroid="transparent"
                    placeholder='Senha'
                    placeholderTextColor="gray"
                    numberOfLines={10}
                    multiline={true}></TextInput>
            </View>
            <Button title='bomdia' onPress={handlePress}></Button>
            <Menu></Menu>
            <StatusBar style="auto" />
        </View>
    );
}
export default TelaTres;
import React, { createContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Image, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import estilo from './style/style.js';
import Menu from './Menu';

function TelaTres({ route, navigation }) {
    const [v1, setV1] = useState('');
    const [v2, setV2] = useState('');
    const [v3, setV3] = useState('');
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [endereco, setEndereco] = useState('');

    const bomdia = 'bom dia duplo';

    const copiar = () => {
        setNome(v1);
        setIdade(v2);
        setEndereco(v3);
        Alert.alert(
            '- Dados -',
            'Nome: '+v1+
            '  - Idade: '+v2+
            '  - Endereço: '+v3,
            [
                { text: 'Faz Dnv', onPress: () => navigation.navigate("TelaTres") },
            ]
        );
    }

    return (
        <View style={estilo.container}>
            <View style={estilo.ngcdoview}>
                <Text>Nome: {nome}</Text>
                <Text>Idade: {idade}</Text>
                <Text>Endereço: {endereco}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={estilo.touchaslamn}>
                <Text> Clique na imagem (Se for capaz) </Text>
                <Image source={require('./assets/rocket.gif')} style={estilo.img}></Image>
            </TouchableOpacity>
            <View style={estilo.areaTexto}>
                <TextInput
                    onChangeText={setV1}
                    underlineColorAndroid="transparent"
                    placeholder='Nome'
                    placeholderTextColor="gray"
                    numberOfLines={10}
                    multiline={true}></TextInput>
            </View>
            <View style={estilo.areaTexto}>
                <TextInput
                    onChangeText={setV2}
                    underlineColorAndroid="transparent"
                    placeholder='Idade'
                    placeholderTextColor="gray"
                    numberOfLines={10}
                    multiline={true}></TextInput>
            </View>
            <View style={estilo.areaTexto}>
                <TextInput
                    onChangeText={setV3}
                    underlineColorAndroid="transparent"
                    placeholder='Endereço'
                    placeholderTextColor="gray"
                    numberOfLines={10}
                    multiline={true}></TextInput>
            </View>
            <Button title='Copiar' onPress={copiar}></Button>
            <Button title='oi' onPress={() => navigation.navigate('Aslamn',{bomdia, nome, idade, endereco})}></Button>
            <Menu></Menu>
            <StatusBar style="auto" />
        </View>
    );
}
export default TelaTres;
import React, { createContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, TouchableOpacity, Image, TextInput, Button, Alert } from 'react-native';
import estilo from './style/style.js';
import Menu from './Menu';
import { ScrollView } from 'react-native-gesture-handler';

function Aslamn({ route, navigation }) {
    console.log(route.params);
    const {bomdia, nome, idade, endereco} = route.params; 

    /*
    for (let i = 11; i<= 20; i++){
        numbersa.push(i);
    }*/

    //const numbers = [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10];
   /* const ola = 'amigo?';
    function exec(){
        const ola = 'sim';
        return ola;
    }
    const aluno = {
        nome: 'chico',
        idade: 33,
        end:{
            rua: 'av do centro',
            num: 20
        }
    }

    console.log(ola);
    console.log(exec());
    console.log(aluno);
    console.log(aluno.nome);
*/

   /* const handlePress = () => {
        Alert.alert(
            'Obrigado!',
            'Enviado com sucesso!',
            [
                {
                    text: 'Nova Avaliação', onPress: () =>
                        navigation.navigate("Home")
                },
            ]
        );
    }
    const aa = () => {
        return <Text>Letra A</Text>;
    };

    const cc1 = <Text>oi</Text>;

    const [ola, setOla] = useState('');
    const somates = () => {
        let tabuei = 9;
        let cont = 0;
        var olho = 0;
        while (cont < 10) {
            cont++;
            olho += (tabuei * cont);
            setOla(olho);
        }
    }*/

        /*
        var a = 10;
        var b = 5;
        var igor = a + b;
        if (igor >= 10) {
            console.log('mario');
        } else {
            console.log('luigi');
        }
        let tabuei = 9;
        let cont = 0;
        var olho = 0;
        while (cont < 10) {
            cont++;
            olho += (tabuei * cont);
        }*/
        return (
            <View style={estilo.container}>
                <Text></Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={estilo.touchaslamn}>
                    <Text> Clique na imagem (Se for capaz){bomdia}{nome}{idade}{endereco}</Text>
                    <Image source={require('./assets/spid.gif')} style={estilo.img}></Image>
                    <View style={estilo.areaTexto}>
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder='Escreva aqui (Se for capaz)'
                            placeholderTextColor="gray"
                            numberOfLines={10}
                            multiline={true}></TextInput>
                    </View>
                </TouchableOpacity>
                <Menu></Menu>
                <StatusBar style="auto" />
            </View>
        );
    }
    export default Aslamn;
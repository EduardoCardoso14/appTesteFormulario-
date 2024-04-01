import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground } from 'react-native';
import estilo from './style/style.js';

function Home({ navigation }) {
    return (
        <View style={estilo.container}>
            <Text> ESTOU ALTERADO ESTOU ALTERADO ESTOU ALTERADO</Text>
            <StatusBar style="auto" />
        </View>
    );
}
export default Home;
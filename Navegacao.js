// Navigation.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Aslamn from './Aslamn';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}
        options={{
          title: 'Home Teste ',
          headerTintColor: 'black',
          headerStyle: { backgroundColor: 'white' }
        }}  />
        <Stack.Screen name="Aslamn" component={Aslamn}
        options={{
          title: 'Aslamn Teste ',
          headerTintColor: 'black',
          headerStyle: { backgroundColor: 'white' }
        }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
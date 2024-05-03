import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'; // Tela inicial com o botão
import FirstScreen from './FirstScreen'; // Tela de Contexto
import SsecondScreen from './SsecondScreen'; // Tela de Contexto


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="First" component={FirstScreen} />
        <Stack.Screen name="Second" component={SsecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

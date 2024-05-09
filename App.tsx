import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { TEMAS } from './src/style/style';
import Principal from './src/screen1';
import NossoObjetivo from './src/style/screen2';
import ComoFunciona from './src/style/screen3';
import Categorias from './src/style/screen4';
import Comecar from './src/style/screen5';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Principal"
          screenOptions={{
            headerShown: false, // Esconde o cabeçalho em todas as telas
          }}
        >
          <Stack.Screen name="Principal" component={Principal} />
          <Stack.Screen name="NossoObjetivo" component={NossoObjetivo} />
          <Stack.Screen name="ComoFunciona" component={ComoFunciona} />
          <Stack.Screen name="Categorias" component={Categorias} />
          <Stack.Screen name="Comecar" component={Comecar} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

import React from 'react';
import { VStack, Text, Image, Button, HStack } from 'native-base';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation
import CirculoCategoria from '../assets/Circulo_Categorias.png';
import CirculoLinkEsquerda from '../assets/Circulo_Link_Esquerda.png';

export default function Categorias() {
  const navigation = useNavigation(); // Obtenha a função de navegação

  const navigateToScreen = (route: string) => {
    navigation.navigate(route as never); // Fazemos um cast para 'never' para contornar o erro
  };
  
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={3} style={{ backgroundColor: '#6DECB9', position: 'relative' }}>
      <Image source={CirculoCategoria} alt='Imagem com o símbolo de categorias' />
      <Text
        fontSize="2xl"
        fontWeight="bold"
        color="white"
        textAlign="center"
        mt={10}
      >
        Categorias do Forms
      </Text>
      <VStack space={3} mt={3}>
        <HStack space={3} justifyContent="center">
          <Button style={{ backgroundColor:'rgba(12, 124, 186, 1)', borderRadius: 10 }} onPress={() => navigateToScreen('Comecar')}> Botão 1 </Button>
          <Button style={{ backgroundColor:'rgba(108, 136, 0, 1)', borderRadius: 10 }} onPress={() => navigateToScreen('Comecar')}> Botão 2 </Button>
          <Button style={{ backgroundColor:'rgba(201, 45, 57, 1)', borderRadius: 10 }} onPress={() => navigateToScreen('Comecar')}> Botão 3 </Button>
        </HStack>
        <HStack space={3} justifyContent="center">
          <Button style={{ backgroundColor:'rgba(151, 87, 19, 1)', borderRadius: 10 }} onPress={() => navigateToScreen('Comecar')}> Botão 4 </Button>
          <Button style={{ backgroundColor:'rgba(252, 196, 56, 1)', borderRadius: 10 }} onPress={() => navigateToScreen('Comecar')}> Botão 5 </Button>
          <Button style={{ backgroundColor:'rgba(239, 141, 34, 1)', borderRadius: 10 }} onPress={() => navigateToScreen('Comecar')}> Botão 6 </Button>
        </HStack>
        <HStack space={3} justifyContent="center">
          <Button style={{ backgroundColor:'rgba(94, 94, 94, 1)', borderRadius: 10 }} onPress={() => navigateToScreen('Comecar')}> Botão 7 </Button>
          <Button style={{ backgroundColor:'rgba(75, 90, 194, 1)', borderRadius: 10 }} onPress={() => navigateToScreen('Comecar')}> Botão 8 </Button>
        </HStack>
      </VStack> 
      <Button onPress={() => navigation.goBack()} style={{ overflow: 'hidden', position: 'absolute', bottom: 20, left: 20, backgroundColor: 'transparent' }}>
        <Image source={CirculoLinkEsquerda} alt="Botão de volta" width={50} height={50} />
      </Button>
    </VStack>
  );
}

import React from 'react';
import { VStack, Text, Image, Button, Icon } from 'native-base';
import CirculoOque from './assets/Circulo_Oque.png';
import CirculoLinkEsquerda from './assets/Circulo_Link_Esquerda.png';
import CirculoLinkDireita from './assets/Circulo_Link_Direita.png';
import { Ionicons } from '@expo/vector-icons';

export default function Principal({ navigation }) {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5} style={{ backgroundColor: '#6DECB9', position: 'relative' }}>
      <Image source={CirculoOque} alt='Imagem com o símbolo do que é IPTU verde' />
      <Text
        fontSize="2xl"
        fontWeight="bold"
        color="gray.500"
        textAlign="center"
        mt={5}
      >
        O que é o IPTU VERDE ?
      </Text>
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make
      </Text>
      <Button onPress={() => navigation.goBack()} style={{ overflow: 'hidden', position: 'absolute', bottom: 20, left: 20, backgroundColor: 'transparent' }}>
        <Image source={CirculoLinkEsquerda} alt="Botão de volta" width={50} height={50} />
      </Button>
      <Button onPress={() => navigation.navigate('NossoObjetivo')} style={{ overflow: 'hidden', position: 'absolute', bottom: 20, right: 20, backgroundColor: 'transparent' }}>
        <Image source={CirculoLinkDireita} alt="Botão de avançar" width={50} height={50} />
      </Button>
    </VStack>
  );
}
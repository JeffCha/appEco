import React from 'react';
import { VStack, Text, Image, Button } from 'native-base';
import CirculoComecar from '../assets/Circulo_Começo.png';
import CirculoLinkEsquerda from '../assets/Circulo_Link_Esquerda.png';

export default function Comecar({ navigation }) {
  const iniciarQuestionario = () => {
    // Adicione aqui a lógica para iniciar o questionário
    // Por exemplo, você pode navegar para a primeira tela do questionário
    navigation.navigate('PrimeiraPergunta');
  };

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5} style={{ backgroundColor: '#6DECB9', position: 'relative' }}>
      <Image source={CirculoComecar} alt='Imagem com o símbolo de começar' />
      <Text
        fontSize="2xl"
        fontWeight="bold"
        color="gray.500"
        textAlign="center"
        mt={5}
      >
        Começar
      </Text>
      <Text>
        Toque no botão abaixo para começar o questionário.
      </Text>
      <Button onPress={iniciarQuestionario} style={{ marginTop: 20 }}>
        Começar Questionário
      </Button>
      <Button onPress={() => navigation.goBack()} style={{ overflow: 'hidden', position: 'absolute', bottom: 20, left: 20, backgroundColor: 'transparent' }}>
        <Image source={CirculoLinkEsquerda} alt="Botão de volta" width={50} height={50} />
      </Button>
    </VStack>
  );
}

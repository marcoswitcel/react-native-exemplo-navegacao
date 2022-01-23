import React from 'react';
import { Text, View } from 'react-native';
import style from './style';

export const Information = ({ route }) => {
  const {nome, telefone, endereco, numero, profissao } = route.params;

  return (
    <View style={style.container}>
      <Text>Nome: { nome }</Text>
      <Text>Telefone: { telefone }</Text>
      <Text>Endereço: { endereco }</Text>
      <Text>Número: { numero }</Text>
      <Text>Profissão: { profissao }</Text>
    </View>
  )
};

export default Information;

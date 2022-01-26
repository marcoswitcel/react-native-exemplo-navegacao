import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import style from './style';


export const ContacItem = ({ navigation, contact, number }) => (
  <TouchableOpacity onPress={() => navigation.navigate('Information', contact)}>
    <View style={style.listItem}>
      <Text>Nº: {number}</Text>
      <Text>Nome: {contact.nome}</Text>
      <Text>Telefone: {contact.telefone}</Text>
      <Text>Ver mais</Text>
    </View>
  </TouchableOpacity>
);

export default ContacItem;

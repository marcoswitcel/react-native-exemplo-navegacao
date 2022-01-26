import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import style from './style';


export const ContacItem = ({ navigation, contact, number }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('Information', contact)}
    style={style.container}
  >
    <View style={style.left}>
      <Text style={style.numberText}>{number}º</Text>
    </View>
    <View style={style.right}>
      <Text>Nome: {contact.nome}</Text>
      <Text>Telefone: {contact.telefone}</Text>
      <Text>Ver mais</Text>
    </View>
  </TouchableOpacity>
);

export default ContacItem;

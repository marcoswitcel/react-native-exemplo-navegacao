import React from 'react';
import { Text, View } from 'react-native';

export default ({ route }) => {
    const {nome, telefone, endereco, numero, profissao } = route.params;

    return (
        <View style={{marginTop: 60}}>
            <Text>nome: { nome }</Text>
            <Text>telefone: { telefone }</Text>
            <Text>endereco: { endereco }</Text>
            <Text>numero: { numero }</Text>
            <Text>profissao: { profissao }</Text>
        </View>
    )
}

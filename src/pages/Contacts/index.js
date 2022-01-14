import React from 'react';
import { Text, View } from 'react-native';


export default ({ navigation }) => (
    <View style={{marginTop: 60}}>
        <View>
            <Text>Nome: Teste Do Teste</Text>
            <Text>Telefon: (99) 99999-9999</Text>
            <Text onPress={() => navigation.navigate('Information', {
                nome: 'Teste Do Teste',
                telefone: '(99) 99999-9999',
                endereco: 'Rua das Flores',
                numero: '165',
                profissao: 'TI',
            })}>
                Information...
            </Text>
        </View>
        <View style={{marginTop: 10}}>
            <Text>Nome: Teste Do Testestado</Text>
            <Text>Telefon: (99) 99999-9999</Text>
            <Text onPress={() => navigation.navigate('Information', {
                nome: 'Teste Do Testestado',
                telefone: '(99) 99999-9999',
                endereco: 'Rua das Flores',
                numero: '165',
                profissao: 'TI',
            })}>
                Information...
            </Text>
        </View>
    </View>
)

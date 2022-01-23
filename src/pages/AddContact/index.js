import React, { useState } from 'react';
import { Text, TextInput, View, Button } from "react-native";
import { style } from './style';


export default () => {
    const [ nome, setNome ] = useState('');
    const [ telefone, setTelefone ] = useState('');
    const [ endereco, setEndereco ] = useState('');
    const [ numero, setNumero ] = useState('');
    const [ profissao, setProfissao ] = useState('');

    return (
        <View style={style.container}>
            <Text>Adicionar contato</Text>
            <Text style={style.label}>Nome</Text>
            <TextInput style={style.input} onChange={(event) => setNome(event.nativeEvent.text)} />
            <Text style={style.label}>Telefone</Text>
            <TextInput style={style.input} onChange={(event) => setTelefone(event.nativeEvent.text)} />
            <Text style={style.label}>Endereço</Text>
            <TextInput style={style.input} onChange={(event) => setEndereco(event.nativeEvent.text)} />
            <Text style={style.label}>Número</Text>
            <TextInput style={style.input} onChange={(event) => setNumero(event.nativeEvent.text)} />
            <Text style={style.label}>Profissão</Text>
            <TextInput style={style.input} onChange={(event) => setProfissao(event.nativeEvent.text)} />

            <Button title='Cadastrar' onPress={() => { console.log({ nome, telefone, endereco, numero, profissao }); alert('Falta validar e salvar'); }} />
        </View>
    )
};

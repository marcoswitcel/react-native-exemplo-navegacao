import React, { useState } from 'react';
import { Text, TextInput, View, Button } from "react-native";
import { ContactRepository } from '../repository/ContactRepository';
import { style } from './style';


export default () => {
    const [ nome, setNome ] = useState('');
    const [ telefone, setTelefone ] = useState('');
    const [ endereco, setEndereco ] = useState('');
    const [ numero, setNumero ] = useState('');
    const [ profissao, setProfissao ] = useState('');

    const saveHandler = () => {

        if ([ nome, telefone, endereco, numero, profissao].some(value => value.trim() === '')) {
            alert('Por favor preencha todos os campos');
            return;
        }
        
        ContactRepository
            .store({ nome, telefone, endereco, numero, profissao })
            .then(
                (saved) => {
                    if (saved) {
                        alert('Cadastrado com sucesso!');
                    } else {
                        alert('Algum problema ocorreu ao cadastrar!');
                    }
                },
                () => { alert('Algum problema ocorreu ao cadastrar!'); }
            );
    }

    return (
        <View style={style.container}>
            <Text style={style.label}>Nome</Text>
            <TextInput style={style.input} onChange={(event) => setNome(event.nativeEvent.text)} />
            <Text style={style.label}>Telefone</Text>
            <TextInput style={style.input} onChange={(event) => setTelefone(event.nativeEvent.text)} />
            <Text style={style.label}>Endereço</Text>
            <TextInput style={style.input} onChange={(event) => setEndereco(event.nativeEvent.text)} />
            <Text style={style.label}>Número</Text>
            <TextInput style={style.input} onChange={(event) => setNumero(event.nativeEvent.text)} />
            <Text style={style.label}>Profissão</Text>
            <TextInput style={[style.input, style.lastInput]} onChange={(event) => setProfissao(event.nativeEvent.text)} />

            <Button
                title='Cadastrar'
                onPress={saveHandler}
            />
        </View>
    )
};

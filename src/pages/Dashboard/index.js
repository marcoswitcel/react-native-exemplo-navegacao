import React from 'react';
import { Text, View, Button } from 'react-native';
import style from './style';

export const Dashboard = ({ navigation }) => (
	<View style={style.container}>
		<Text>Gerenciador de contatos</Text>
		<Button
			title='Cadastrar novo contato'
			onPress={() => navigation.navigate('AddContact')}
		/>
	</View>
);

export default Dashboard;

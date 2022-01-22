import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import style from './style';


export default ({ route, navigation }) => (
    <View style={style.listContainer}>
        { route.params.contactsListRef.current.map((item) => (
            <View key={item.id} style={style.listItem}>
                <Text>Nome: {item.nome}</Text>
                <Text>Telefone: {item.telefone}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Information', item)}>
                    <Text>Ver mais</Text>
                </TouchableOpacity>
            </View>
        ))
        }
    </View>
);

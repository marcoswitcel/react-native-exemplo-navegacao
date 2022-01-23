import React from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import style from './style';


export default ({ route, navigation }) => (
    <View style={style.listContainer}>
        <FlatList
            data={route.params.contactsListRef.current}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('Information', item)}>
                    <View style={style.listItem}>
                        <Text>Nome: {item.nome}</Text>
                        <Text>Telefone: {item.telefone}</Text>
                        <Text>Ver mais</Text>
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
        />
    </View>
);

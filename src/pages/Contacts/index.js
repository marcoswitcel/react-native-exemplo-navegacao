import React from 'react';
import { Text, View } from 'react-native';


export default ({ route, navigation }) => (
    <View style={{marginTop: 60}}>
        { route.params.contactsListRef.current.map((item) => (
            <View>
                <Text>Nome: {item.nome}</Text>
                <Text>Telefon: {item.telefone}</Text>
                <Text onPress={() => navigation.navigate('Information', item)}>
                    Information...
                </Text>
            </View>
        ))
        }
    </View>
)

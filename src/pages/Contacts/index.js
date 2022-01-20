import React from 'react';
import { Text, View } from 'react-native';


export default ({ route, navigation }) => (
    <View style={{marginTop: 60}}>
        { route.params?.contactsList?.length && route.params.contactsList.map((item) => (
            <View>
                <Text>Nome: Teste Do Teste</Text>
                <Text>Telefon: (99) 99999-9999</Text>
                <Text onPress={() => navigation.navigate('Information', item)}>
                    Information...
                </Text>
            </View>
        ))
        }
    </View>
)

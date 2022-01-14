import React from 'react';
import { Text, View } from 'react-native';


export default ({ navigation }) => (
    <View>
        <Text>Contato</Text>
        <Text
            onPress={() => navigation.navigate('Information')}
        >
            Information...
        </Text>
    </View>
)

import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { ContactRepository } from '../repository/ContactRepository';
import style from './style';


export const Contacts = ({ navigation }) => {
  const [ contactsList, setContactsList ] = useState([]);

  useEffect(() => {
    ContactRepository.getAll().then(setContactsList)
  }, []);

  return (
    <View style={style.listContainer}>
      <FlatList
        data={contactsList}
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
};

export default Contacts;

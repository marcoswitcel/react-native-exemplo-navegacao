import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { ContactRepository } from '../../repository/ContactRepository';
import style from './style';


export const Contacts = ({ navigation }) => {
  const [ contactsList, setContactsList ] = useState([]);

  useEffect(() => {
    ContactRepository.getAll().then(setContactsList);
    ContactRepository.onStoreListeners.add(() => {
      ContactRepository.getAll().then(setContactsList);
    });
  }, []);

  return (
    <View>
      <FlatList
        style={style.listContainer}
        data={contactsList}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Information', item)}>
            <View style={style.listItem}>
              <Text>Nº: {index + 1}</Text>
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

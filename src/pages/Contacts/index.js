import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import ContacItem from '../../components/ContactItem';
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
          <ContacItem contact={item} number={index + 1} navigation={navigation}  />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Contacts;

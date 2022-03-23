import React, { useEffect, useState } from 'react';
import { SectionList, Text, View } from 'react-native';
import ContacItem from '../../components/ContactItem';
import { ContactRepository } from '../../repository/ContactRepository';
import { groupByFirstLetter } from '../../utils';
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
      <SectionList
        style={style.listContainer}
        sections={groupByFirstLetter(contactsList)}
        data={contactsList}
        renderItem={({ item, index }) => (
          <ContacItem contact={item} number={index + 1} navigation={navigation}  />
        )}
        renderSectionHeader={({ section: { title }}) => (
          <Text style={style.listHeadings}>{title}</Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Contacts;

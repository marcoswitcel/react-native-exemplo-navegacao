import React, { useEffect, useRef, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as SQLite from 'expo-sqlite'

import Contacts from './src/pages/Contacts';
import Information from './src/pages/Information';
import AppContacts from './src/pages/AppContacts';


/**
 * @TODO desinstalar essas duas dependências `expo-file-system expo-asset`
 * e testar se tudo continuar funcionando
 */

const db = SQLite.openDatabase('db.testDb')
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs({ route }) {
  const { contactsListRef } = route.params;

  return (
    <Tab.Navigator>
      <Tab.Screen name="AppContacts" component={AppContacts} />
      <Tab.Screen name="Contacts" component={Contacts} initialParams={{ contactsListRef }} />
    </Tab.Navigator>
  )
}

export default function App() {
  const contactsListRef = useRef([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS contacts (id integer primary key not null, nome text, telefone text, endereco text, numero text, profissao text)"
      );
      
      tx.executeSql('SELECT count(*) as result FROM contacts', [], (_, { rows }) => {
        if (rows._array[0]['result'] === 0) {
          tx.executeSql(
            'INSERT INTO contacts (nome, telefone, endereco, numero, profissao) VALUES (?,?,?,?,?)',
            ['Nome de teste', '99999-9999', 'casa', '111', 'Profissão']
          );
          tx.executeSql(
            'INSERT INTO contacts (nome, telefone, endereco, numero, profissao) VALUES (?,?,?,?,?)',
            ['Nome de teste 2', '99999-9999', 'casa', '111', 'Profissão']
          );
        }
        tx.executeSql('SELECT * FROM contacts', [], (_, { rows }) => {
          contactsListRef.current = rows._array;
        });
      })
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false}} name="Geral" component={Tabs} initialParams={{ contactsListRef }} />
        <Stack.Screen name="Information" component={Information} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

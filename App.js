import React, { useEffect, useRef, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Contacts from './src/pages/Contacts';
import Information from './src/pages/Information';
import AppContacts from './src/pages/AppContacts';
import { ContactRepository } from './src/pages/repository/ContactRepository';


/**
 * @TODO desinstalar essas duas dependências `expo-file-system expo-asset`
 * e testar se tudo continuar funcionando
 */

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
    ContactRepository.getAll().then((rows) => contactsListRef.current = rows)
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

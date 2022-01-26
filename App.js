import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Contacts from './src/pages/Contacts';
import Information from './src/pages/Information';
import AddContact from './src/pages/AddContact';
import Dashboard from './src/pages/Dashboard';
import { ContactRepository } from './src/repository/ContactRepository';
import { Ionicons } from '@expo/vector-icons';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs({ route }) {
  const { contactsListRef } = route.params;

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: 'Tela Inicial',
          tabBarIcon:  ({ color, size}) => <Ionicons name="home-outline" size={size} color={color} />
        }}
        name="Dashboard"
        component={Dashboard}
      />
      <Tab.Screen
        options={{
          title: 'Lista de Contatos',
          tabBarIcon: ({ color, size}) => <Ionicons name="list" size={size} color={color} />
        }}
        name="Contacts"
        component={Contacts}
        initialParams={{ contactsListRef }}
      />
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
        <Stack.Screen options={{ headerShown: false}} name="Container" component={Tabs} initialParams={{ contactsListRef }} />
        <Stack.Screen options={{ title: 'Dados do Contato' }} name="Information" component={Information} />
        <Stack.Screen options={{ title: 'Cadastro de Contato' }} name="AddContact" component={AddContact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Main from './pages/Main';
import Details from './pages/Details';
import Player from './pages/Player';

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main}
        options={{
          headerShown: false
        }} />
      <Stack.Screen name="Details" component={Details}
        options={{
          headerTransparent: true,
          headerTintColor: '#fff',
          title: ''
        }} />
      <Stack.Screen name="Player" component={Player}
        options={{
          headerShown: false
        }} />
    </Stack.Navigator>
  );
}

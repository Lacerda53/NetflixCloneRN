import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Main from './pages/Main';
import Details from './pages/Details';

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} options={{headerShown: false}} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

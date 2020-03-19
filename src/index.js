import React from 'react';
import { YellowBox } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import '~/config/ReactotronConfig';

YellowBox.ignoreWarnings(['Warning', 'VirtualizedLists']);
import Routes from '~/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

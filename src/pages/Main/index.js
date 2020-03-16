import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import Poster from '~/components/Poster';
import Popular from '~/components/GenresList/Popular.js';
import Comedy from '~/components/GenresList/Comedy.js';
import Crime from '~/components/GenresList/Crime.js';
import Drama from '~/components/GenresList/Drama.js';
import {
  Container,
  ContentView
} from './styles';

export default function Main() {
  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView>
        <ContentView>
          <Poster />
          <Popular />
          <Comedy />
          <Crime />
        </ContentView>
      </ScrollView>
    </Container>
  );
}

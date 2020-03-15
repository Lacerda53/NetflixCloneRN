import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import Poster from '~/components/Poster';
import Popular from '~/components/Genres/Popular.js';
import Comedy from '~/components/Genres/Comedy.js';
import Crime from '~/components/Genres/Crime.js';
import Drama from '~/components/Genres/Drama.js';
import {
  Container,
  ContentView
} from './styles';

export default class Main extends Component {
  render() {
    return (
      <Container>
        <StatusBar translucent backgroundColor="transparent" />
        <ScrollView>
          <ContentView>
            <Poster/>
            <Popular />
            <Comedy />
            <Crime />
            <Drama />
          </ContentView>
        </ScrollView>
      </Container>
    );
  }
}

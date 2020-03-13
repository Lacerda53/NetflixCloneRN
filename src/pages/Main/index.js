import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import Poster from '~/components/Poster';
import Popular from '~/components/Popular.js';
import Comedy from '~/components/Comedy.js';
import Crime from '~/components/Crime.js';
import Drama from '~/components/Drama.js';
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
            <Poster />
            <Popular />
            <Comedy />
            <Crime />
            <Drama />
            {/* <Comedy />
          <Crime />
          <Documentary />
          <Drama />
          <Family />
          <Fantasy /> */}
          </ContentView>
        </ScrollView>
      </Container>
    );
  }
}

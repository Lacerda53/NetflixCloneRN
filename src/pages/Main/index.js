import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import Poster from '~/components/Poster';
import Popular from '~/components/Popular.js';
import Action from '~/components/Action.js';
import Aventure from '~/components/Aventure.js';
import Animation from '~/components/Animation.js';
import Comedy from '~/components/Comedy.js';
import Crime from '~/components/Crime.js';
import Documentary from '~/components/Documentary.js';
import Drama from '~/components/Drama.js';
import Family from '~/components/Family.js';
import Fantasy from '~/components/Fantasy.js';
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
          <Poster/>
          <Popular />
          <Action />
          <Aventure />
          <Animation />
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

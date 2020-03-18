import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import Poster from '~/components/Poster';
import Popular from '~/components/GenresList/Popular.js';
import Comedy from '~/components/GenresList/Comedy.js';
import Crime from '~/components/GenresList/Crime.js';
import Drama from '~/components/GenresList/Drama.js';
import Action from '~/components/GenresList/Action.js';
import Animation from '~/components/GenresList/Animation.js';
import Documentary from '~/components/GenresList/Documentary.js';
import Family from '~/components/GenresList/Family.js';
import Fantasy from '~/components/GenresList/Fantasy.js';
import History from '~/components/GenresList/History.js';
import Horror from '~/components/GenresList/Horror.js';
import Aventure from '~/components/GenresList/Aventure.js';

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
          <Horror/>
          {/*
          <Family/>
          <Documentary/>
          <Aventure/>
          <Action />
          <Crime />
          <Drama/>
          <Fantasy/>
          <History/>
          <Animation/>
          */}
        </ContentView>
      </ScrollView>
    </Container>
  );
}

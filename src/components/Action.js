import React, { Component } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import api, { key } from '~/services/api';
import {
  Container,
  CapaImage,
  CapaContainer,
  ItemSeparation,
  TitleText
} from './styles';

export default class Action extends Component {
  state = {
    capa: [],
    isLoading: false,
    genero: '28'
  }
 async componentDidMount() {
    this.loadAction();
  }
  loadAction = async () => {
    this.setState({ isLoading: true });
    const response = await api.get(`discover/movie?api_key=${key}&sort_by=popularity.desc&page=1&with_genres=${this.state.genero}`);
    const result = await response.data;
    this.setState({ capa: result.results, isLoading: false });
  }
  render() {
    return (
      <Container >
        <TitleText>Ação</TitleText>
        {this.state.isLoading ?
          <ActivityIndicator style={{ flex: 1 }} size="large" color="#ec0007" animating={this.state.isLoading} />
          :
            <FlatList
              data={this.state.capa}
              horizontal={true}
              keyExtractor = { (item, index) => index.toString() }
              ItemSeparatorComponent={() => <ItemSeparation />}
              renderItem={({ item }) =>
                <CapaContainer>
                  <CapaImage source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.poster_path }} />
                </CapaContainer>
              }
            />
        }
      </Container>
    );
  }
}

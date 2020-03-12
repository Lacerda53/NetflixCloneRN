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

export default class Popular extends Component {
  state = {
    capa: [],
    isLoading: false
  }
  async componentDidMount() {
    this.loadPopular();
  }
  loadPopular = async () => {
    this.setState({ isLoading: true });
    const response = await api.get(`/movie/popular?api_key=${key}&language=pt-BR&page=1`);
    const result = await response.data;
    this.setState({ capa: result.results, isLoading: false });
  }
  render() {
    return (
      <Container >
        <TitleText>Em alta</TitleText>
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

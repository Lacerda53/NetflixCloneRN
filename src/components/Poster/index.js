import React, { Component } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import Header from '~/components/Header';
import api, { key } from '~/services/api';
import {
  Container,
  ContainerPoster,
  PosterImage,
  GenresView,
  GenresText,
  ContainerGradiente
} from './styles';

export default class Action extends Component {
  state = {
    poster: {},
    isLoading: false,
    movie: 495764,
    genres: []
  }
  async componentDidMount() {
    this.loadAction();
  }
  loadAction = async () => {
    this.setState({ isLoading: true });
    const response = await api.get(`movie/${this.state.movie}?api_key=${key}&language=pt-BR`);
    const result = await response.data;
    this.setState({ poster: result, isLoading: false, genres: result.genres });
  }
  render() {
    return (
      <Container >
        <Header />
        <PosterImage source={{ uri: 'https://image.tmdb.org/t/p/w500/' + this.state.poster.poster_path }} />
        <ContainerGradiente>
          <ContainerPoster />
        </ContainerGradiente>
        <GenresView>
          {this.state.genres.map(item => (
            <GenresText>{item.name} </GenresText>
          ))}
        </GenresView>
      </Container>
    );
  }
}

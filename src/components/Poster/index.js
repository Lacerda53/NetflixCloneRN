import React, { Component } from 'react';
import { TouchableOpacity, Button } from 'react-native';
import Header from '~/components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import api, { key } from '~/services/api';
import {
  Container,
  ContainerPoster,
  PosterImage,
  GenresView,
  GenresText,
  ContainerGradiente,
  ButtonPLay,
  ButtonPLayText,
  OptionsContainer,
  ButtonMyList,
  ButtonInfo,
  PlayContainer,
  ButtonDescri
} from './styles';

export default class Poster extends Component {

  state = {
    poster: {},
    isLoading: false,
    movie: 581600,
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
  };
  render() {
    const navigation = this.props.navigation;
    return (
      <Container >
        <Header />
        <TouchableOpacity onPress={()=> navigation.navigate("Details")}>
          <PosterImage source={{ uri: 'https://image.tmdb.org/t/p/original/' + this.state.poster.poster_path }} />
          <ContainerGradiente>
            <ContainerPoster />
          </ContainerGradiente>
          <GenresView>
            {this.state.genres.map(item => (
              <GenresText>{item.name} </GenresText>
            ))}
          </GenresView>
        </TouchableOpacity>
        <PlayContainer>
          <ButtonPLay>
            <Icon name="play" size={20} />
            <ButtonPLayText>Assistir</ButtonPLayText>
          </ButtonPLay>
        </PlayContainer>
        <OptionsContainer>
          <ButtonMyList>
            <Icon name="plus" size={20} color="#fff" />
            <ButtonDescri>Minha Lista</ButtonDescri>
          </ButtonMyList>
          <ButtonInfo>
            <Icon name="info" size={20} color="#fff" />
            <ButtonDescri>Info</ButtonDescri>
          </ButtonInfo>
        </OptionsContainer>
      </Container>
    );
  }
}

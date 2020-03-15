import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Header from '~/components/Header';
import {useNavigation} from '@react-navigation/native';
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

export default function Poster() {

  const [poster, setPoster] = useState({});
  const [movie] = useState(581600);
  const [genres, setGenres] = useState([]);

  const {navigate} = useNavigation();
  useEffect(() => {
    this.loadAction();
  }, [])

  loadAction = async () => {
    const response = await api.get(`movie/${movie}?api_key=${key}&language=pt-BR`);
    const result = await response.data;
    setPoster(result);
    setGenres(result.genres);
  };
  return (
    <Container >
      <Header />
      <TouchableOpacity onPress={() => navigate('Details') }>
        <PosterImage source={{ uri: 'https://image.tmdb.org/t/p/original/' + poster.poster_path }} />
        <ContainerGradiente>
          <ContainerPoster />
        </ContainerGradiente>
        <GenresView>
          {genres.map(item => (
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

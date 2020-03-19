import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Header from '~/components/Header';
import env from 'react-native-config';
import {useNavigation} from '@react-navigation/native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import api from '~/services/api';
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
  const API_CHAVE = env.API_CHAVE;
  const {navigate} = useNavigation();

  useEffect(() => {
    this.loadPoster();
  }, [])

  loadPoster = async () => {
    const response = await api.get(`movie/${movie}?api_key=${API_CHAVE}&language=pt-BR`);
    const result = await response.data;
    setPoster(result);
    setGenres(result.genres);
  };
  return (
    <Container >
      <Header />
      <TouchableOpacity activeOpacity={1.0} onPress={() => navigate('Details',{ id: movie}) }>
        <PosterImage source={{ uri: 'https://image.tmdb.org/t/p/original/' + poster.poster_path }} />
        <ContainerGradiente>
          <ContainerPoster />
        </ContainerGradiente>
        <GenresView>
          {genres.map(item => (
            <GenresText key={item.id}>{item.name} </GenresText>
          ))}
        </GenresView>
      </TouchableOpacity>
      <PlayContainer>
        <ButtonPLay onPress={()=> navigate('Player', {id: movie})}>
          <IconAwesome name="play" size={20} />
          <ButtonPLayText>Assistir</ButtonPLayText>
        </ButtonPLay>
      </PlayContainer>
      <OptionsContainer>
        <ButtonMyList>
          <IconAntDesign name="plus" size={20} color="#fff" />
          <ButtonDescri>Minha Lista</ButtonDescri>
        </ButtonMyList>
        <ButtonInfo onPress={()=> navigate('Details', {id: movie})}>
          <IconAntDesign name="infocirlceo" size={20} color="#fff" />
          <ButtonDescri>Info</ButtonDescri>
        </ButtonInfo>
      </OptionsContainer>
    </Container>
  );
}

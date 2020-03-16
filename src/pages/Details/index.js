import React, { useState, useEffect } from 'react';
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity, ActivityIndicator, View, ScrollView } from 'react-native';
import api, { key } from '~/services/api';
import {
  Container,
  HeaderMovie,
  MovieCapa,
  Body,
  TitleMovie,
  Relevant,
  SubText,
  Description,
  TextSmall,
  ContainerGradiente,
  IconPlay,
  ContainerIcon,
  ContainerInfo,
  ContainerButtons,
  TitleButton,
  IconButton,
  ButtonAlign
} from './styles';

export default function Details({ route }) {
  const { id } = route.params;
  const {navigate} = useNavigation();
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    this.loadDetails();
  }, [])

  loadDetails = async () => {
    setLoading(true);
    const response = await api.get(`movie/${id}?api_key=${key}&language=pt-BR`);
    const result = await response.data;
    setData(result);
    setLoading(false);
  };
  return (
    <Container >
      {isLoading ?
        <ActivityIndicator style={{ flex: 1 }} size="large" color="#e50914" animating={isLoading} />
        :
        <ScrollView>
          <View style={{height:'50%'}}>
            <TouchableOpacity onPress={()=> navigate('Player', {id: id})}>
              <MovieCapa source={{ uri: 'https://image.tmdb.org/t/p/original/' + data.backdrop_path }} />
              <ContainerGradiente>
                <HeaderMovie>
                  <ContainerIcon>
                    <IconPlay />
                  </ContainerIcon>
                </HeaderMovie>
              </ContainerGradiente>
            </TouchableOpacity>
            <Body>
              <TitleMovie>{data.title}</TitleMovie>
              <ContainerInfo>
                <Relevant>{data.vote_average}% relevante</Relevant>
                <SubText> {data.release_date}</SubText>
                <SubText> {data.runtime}m</SubText>
              </ContainerInfo>
              <Description>{data.overview}</Description>
              <ButtonAlign>
                <ContainerButtons>
                  <IconButton name="plus" />
                  <TitleButton>Minha Lista</TitleButton>
                </ContainerButtons>
                <ContainerButtons>
                  <IconButton name="like2" />
                  <TitleButton>Classifique</TitleButton>
                </ContainerButtons>
                <ContainerButtons>
                  <IconButton name="sharealt" />
                  <TitleButton>Compartilhe</TitleButton>
                </ContainerButtons>
                <ContainerButtons>
                  <IconButton name="download" />
                  <TitleButton>Baixar</TitleButton>
                </ContainerButtons>
              </ButtonAlign>
            </Body>
          </View>
        </ScrollView>
      }
    </Container>
  );
}

import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api, { key } from '~/services/api';
import {
  Container,
  CapaImage,
  CapaContainer,
  ItemSeparation,
  TitleText
} from './styles';

export default function Crime() {
  const [capa, setCapa] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [genero] = useState('80');
  const { navigate } = useNavigation();

  useEffect(() => {
    this.loadCrime();
  }, [])

  loadCrime = async () => {
    setIsLoading(true);
    const response = await api.get(`discover/movie?api_key=${key}&sort_by=popularity.desc&page=1&with_genres=${genero}`);
    const result = await response.data;
    setCapa(result.results);
    setIsLoading(false);
  }
  return (
    <Container >
      <TitleText>Crime</TitleText>
      {isLoading ?
        <ActivityIndicator style={{ flex: 1 }} size="large" color="#ec0007" animating={isLoading} />
        :
        <FlatList
          data={capa}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <ItemSeparation />}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => navigate("Details", { id: item.id })}>
              <CapaContainer>
                <CapaImage source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.poster_path }} />
              </CapaContainer>
            </TouchableOpacity>
          }
        />
      }
    </Container>
  );
}
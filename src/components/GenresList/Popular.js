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

export default function Popular() {
  const [capa, setCapa] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { navigate } = useNavigation();

  useEffect(() => {
    this.loadPopular();
  }, []);

  loadPopular = async () => {
    setIsLoading(true);
    const response = await api.get(`/movie/popular?api_key=${key}&language=pt-BR&page=1`);
    const result = await response.data;
    setCapa(result.results);
    setIsLoading(false);
  }
  return (
    <Container >
      <TitleText>Em alta</TitleText>
      {isLoading ?
        <ActivityIndicator style={{ flex: 1 }} size="large" color="#ec0007" animating={isLoading} />
        :
        <FlatList
          data={capa}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <ItemSeparation />}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={()=> navigate("Details", {id: item.id})}>
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

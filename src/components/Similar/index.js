import React, { useState, useEffect } from 'react';
import env from 'react-native-config';
import api from '~/services/api';
import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableOpacity } from 'react-native';

import {
  Container,
  AtiveContainer,
  AtiveBar,
  AtiveText,
  CapaContainer,
  CapaImage
} from './styles';

export default function Similar(movieId) {
  const id = movieId;
  const [capa, setCapa] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const API_CHAVE = env.API_CHAVE;
  const { navigate } = useNavigation();

  useEffect(() => {
    this.loadSimilar();
  }, [])

  loadSimilar = async () => {
    setIsLoading(true);
    const response = await api.get(`movie/${id}/similar?api_key=${API_CHAVE}&page=1`);
    const result = await response.data;
    setCapa(result.results);
    setIsLoading(false);
  }
  return (
    <Container >
      <AtiveBar />
      <AtiveContainer>
        <AtiveText>OPÇÕES SEMELHANTES</AtiveText>
      </AtiveContainer>
      {capa.map(item =>
        <TouchableOpacity key={item.id} onPress={() => navigate("Details", { id: item.id })}>
          <CapaContainer>
            <CapaImage source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.poster_path }} />
          </CapaContainer>
        </TouchableOpacity>
      )}
    </Container>
  );
}

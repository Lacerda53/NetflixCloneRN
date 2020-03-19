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
  CapaImage,
  ContainerSimilar
} from './styles';

export default function Similar({ params }) {
  const [capa, setCapa] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const API_CHAVE = env.API_CHAVE;
  const { navigate } = useNavigation();

  async function loadSimilar() {
    setIsLoading(true);
    const response = await api.get(`movie/${params}/similar?api_key=${API_CHAVE}&page=1`);
    const result = await response.data;
    setCapa(result.results);
    setIsLoading(false);
  }
  useEffect(() => {
    loadSimilar();
  }, []);

  return (
    <Container >
      <AtiveBar />
      <AtiveContainer>
        <AtiveText>OPÇÕES SEMELHANTES</AtiveText>
      </AtiveContainer>
      <ContainerSimilar>
        <FlatList
          data={capa}
          numColumns={3}
          keyExtractor={post => String(post.id)}
          renderItem={({ item }) =>
            <CapaContainer>
              <TouchableOpacity key={item.id} onPress={() => navigate("Details", { id: item.id })}>
                <CapaImage source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.poster_path }} />
              </TouchableOpacity>
            </CapaContainer>
          }
        />
      </ContainerSimilar>
    </Container>
  );
}

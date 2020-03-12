import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerPoster = styled.View`
  height: 600px;
  justify-content: space-between;
`;

export const ContainerGradiente = styled(LinearGradient).attrs({
  colors: ['#131313','transparent', 'transparent','#131313']
})`
  height: 600px;
  width: 100%;
  justify-content: space-between;
`;

export const GenresView = styled.View`
  flex-direction: row;
  justify-content: center
`;

export const GenresText = styled.Text`
  color: #fff;
  margin-top:-50px;
  font-size: 12px;
`;


export const PosterImage = styled.Image`
  width: 100%;
  height: 600px;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: none;
`;


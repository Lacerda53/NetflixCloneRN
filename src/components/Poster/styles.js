import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  height: 600px;
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
  justify-content: center;
`;

export const GenresText = styled.Text`
  color: #fff;
  margin-top:-100px;
  font-size: 12px;
`;

export const OptionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  top: -90px;
`;

export const PlayContainer = styled.View`
  justify-content: center;
  align-items: center;
  top: -50px;
`;

export const ButtonMyList = styled.TouchableOpacity`
  align-items: center;
  left: 20px;
`;

export const ButtonInfo = styled.TouchableOpacity`
  align-items: center;
  right: 40px;
`;

export const ButtonDescri = styled.Text`
  color: #fff;
`;

export const ButtonPLay = styled.TouchableOpacity`
  flex-direction: row;
  height: 35px;
  width: 100px;
  background-color: #fff;
  justify-content: space-between;
  padding: 11px;
  align-items: center;
  border-radius: 3px;
`;

export const ButtonPLayText = styled.Text`
  font-size: 17px;
`;

export const PosterImage = styled.Image`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: none;
`;


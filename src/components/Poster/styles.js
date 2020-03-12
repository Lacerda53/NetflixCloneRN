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
  justify-content: center;
`;

export const GenresText = styled.Text`
  color: #fff;
  margin-top:-100px;
  font-size: 12px;
`;

export const OptionsContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  margin-left: -25px;
  top: -50px;
`;

export const ButtonMyList = styled.TouchableOpacity`
  align-items: center;
`;

export const ButtonInfo = styled.TouchableOpacity`
  align-items: center;
`;

export const ButtonDescri = styled.Text`
  color: #fff;
`;

export const ButtonPLay = styled.TouchableOpacity`
  flex-direction: row;
  height: 35px;
  width: 90px;
  background-color: #fff;
  justify-content: space-between;
  padding:16px;
  align-items: center;
  border-radius: 3px;
`;

export const ButtonPLayText = styled.Text`
  font-size: 17px;
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


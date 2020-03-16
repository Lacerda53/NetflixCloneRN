import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-Color: #131313;
`;

export const HeaderMovie = styled.View`
  height: 250px;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.View`
  top: -35px;
  padding: 10px;
`;

export const ContainerInfo = styled.View`
  flex-direction: row;
  top: 10px;
`;

export const ContainerIcon = styled.View`
  justify-content: center;
  align-items: center;
`;

export const IconPlay = styled(Icon).attrs({
  name: "playcircleo", size: 60, color: "#fff"
})`
  position: absolute;
  background-color: 'rgba(0, 0, 0, 0.7)';
  border-radius:50px;
`;

export const IconButton = styled(Icon).attrs({
  size: 25, color: "#ccc"
})`
`;

export const TitleButton = styled.Text`
  color: #757575;
  font-size: 11px;
  top: 3px;
`;

export const ContainerButtons = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ButtonAlign = styled.View`
  flex-direction: row;
  justify-content: space-between;
  top: 30px;
  width: 94%;
  left: 5px;
`;

export const ContainerGradiente = styled(LinearGradient).attrs({
  colors: ['#131313', 'transparent', 'transparent', '#131313']
})`
  height: 250px;
  width: 100%;
  justify-content: space-between;
`;

export const MovieCapa = styled.Image`
  width: 100%;
  height: 250px;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: none;
`;

export const TitleMovie = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

export const Relevant = styled.Text`
  color: #01d277;
  font-weight: bold;
  font-size: 14px;
`;

export const SubText = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const Description = styled.Text`
  color: #cccccc;
  font-size: 14px;
  top: 20px;
`;

export const TextSmall = styled.Text`
`;

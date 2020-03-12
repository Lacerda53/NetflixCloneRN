import React from 'react';
import Logo from '~/assets/Logo.png';
import {
  Container,
  NetLogo,
  HeaderView,
  FilmeText
} from './styles';

export default function Header() {
  return (
    <Container >
      <HeaderView>
        <NetLogo source={Logo} />
        <FilmeText>Filmes</FilmeText>
      </HeaderView>
    </Container>
  );
}

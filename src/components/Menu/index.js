import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode';
import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';


export default function Menu({translateY}) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
      }),
    }}>
      <Code>
        <QRCode
          value="https://luanyata.com"
          size={80}
          fgColor="#fff"
          bgColor="#8B10AE"
        />
      </Code>
      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#fff"/>
          <NavText>Me ajuda</NavText>
        </NavItem>

        <NavItem>
          <Icon name="person-outline" size={20} color="#fff"/>
          <NavText>Perfil</NavText>
        </NavItem>

        <NavItem>
          <Icon name="credit-card" size={20} color="#fff"/>
          <NavText>Configurar Cartao</NavText>
        </NavItem>

        <NavItem>
          <Icon name="smartphone" size={20} color="#fff"/>
          <NavText>Configuracoes do app</NavText>
        </NavItem>
      </Nav>
      <SignOutButton onPress={() => {
      }}>
        <SignOutButtonText>Sair da Aplicacao</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}

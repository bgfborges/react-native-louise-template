import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles.js';

export default function Menu({ translateY }){
    return(
        <Container
        style={{
            opacity: translateY.interpolate({
                inputRange: [0, 150],
                outputRange: [0, 1],
            }),
        }}
        >
            <Code>
                <QRCode
                    value="http://bluelike.com.br"
                    size={80}
                    color="#FFF"
                    backgroundColor="#8B10AE"
                />
            </Code>
            <Nav>
                <NavItem>
                    <Icon name='help-outline' size={20} color='#FFF'/>
                    <NavText>Me Ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name='person-outline' size={20} color="#FFF" />
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name='credit-card' size={20} color="#FFF" />
                    <NavText>Pedidos</NavText>
                </NavItem>
                <NavItem>
                    <Icon name='smartphone' size={20} color="#FFF" />
                    <NavText>Conngurações do App</NavText>
                </NavItem>
            </Nav>
            <SignOutButton onPress={() => {}}>
                <SignOutButtonText>Sair do App</SignOutButtonText>
            </SignOutButton>
        </Container>
    );   
}
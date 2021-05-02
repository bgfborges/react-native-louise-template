import React from 'react';
import { Container, Top, Logo, Title } from './styles';
import logo from '../../assets/louise.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header(){
    return(
        <Container>
            <Top>
                <Logo source={logo} />
                <Title>Gabriel</Title>
            </Top>
            <Icon name='keyboard-arrow-down' size={23} color='#FFF'/>
        </Container>
    );
}
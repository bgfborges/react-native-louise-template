import React from 'react';
import { Container, TabsContainer, TabItem, TabText } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Tabs({ translateY }){
  return(
    <>
      <Container style={{
        transform: [{
          translateY: translateY.interpolate({
            inputRange: [0, 380],
            outputRange: [0, 30],
            extrapolate: 'clamp'
          })
        }],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.6],
          extrapolate: 'clamp'
        })
      }}>
        <TabsContainer>
            <TabItem>
                <Icon name='person-add' size={24} color='#FFF'/>
                <TabText>Adicionar Cliente</TabText>
            </TabItem>
            <TabItem>
                <Icon name='credit-card' size={24} color='#FFF'/>
                <TabText>Minhas Comissões</TabText>
            </TabItem>
            <TabItem>
                <Icon name='pending' size={24} color='#FFF'/>
                <TabText>Clientes Pendentes</TabText>
            </TabItem>
            <TabItem>
                <Icon name='done-all' size={24} color='#FFF'/>
                <TabText>Clientes Fechados</TabText>
            </TabItem>
            <TabItem>
                <Icon name='close' size={24} color='#FFF'/>
                <TabText>Clientes Perdidos</TabText>
            </TabItem>
            <TabItem>
                <Icon name='help-outline' size={24} color='#FFF'/>
                <TabText>Me Ajude</TabText>
            </TabItem>
        </TabsContainer>
      </Container>
    </>
  );
}
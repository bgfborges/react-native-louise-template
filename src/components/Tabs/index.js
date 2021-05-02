import React from 'react';
import { Container, TabsContainer, TabItem, TabText } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Tabs(){
  return(
    <>
      <Container>
        <TabsContainer>
            <TabItem>
                <Icon name='person-add' size={24} color='#FFF'/>
                <TabText>Adicionar Cliente</TabText>
            </TabItem>
            <TabItem>
                <Icon name='person-add' size={24} color='#FFF'/>
                <TabText>Minhas Comissões</TabText>
            </TabItem>
            <TabItem>
                <Icon name='person-add' size={24} color='#FFF'/>
                <TabText>Clientes Pendentes</TabText>
            </TabItem>
            <TabItem>
                <Icon name='person-add' size={24} color='#FFF'/>
                <TabText>Clientes Fechados</TabText>
            </TabItem>
            <TabItem>
                <Icon name='person-add' size={24} color='#FFF'/>
                <TabText>Clientes Perdidos</TabText>
            </TabItem>
            <TabItem>
                <Icon name='person-add' size={24} color='#FFF'/>
                <TabText>Me Ajude</TabText>
            </TabItem>
        </TabsContainer>
      </Container>
    </>
  );
}
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import Header from '../../components/Header';
import { Container, Content, Card, CardHeader, CardContent, CardFooter, Annotation, Title, Description } from './styles';
import Tabs from '../../components/Tabs';

export default function Main(){
  return(
    <>
      <Container barStyle="light-content" backgroundColor="#8B10AE">
        <Header />
        
        <Content>
          <Card>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Comissões Disponíveis</Title>
              <Description>R$48.569,00</Description>
            </CardContent>
            <CardFooter>
              <Annotation>Pagamento de R$957,00 recebido de Kaoma Razia hoje as 17h.</Annotation>
            </CardFooter >
          </Card>
        </Content>

        <Tabs />
      </Container>
    </>
  );
}
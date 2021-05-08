import React, { useRef } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Container, TabsContainer, TabItem, TabText } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Modalize } from 'react-native-modalize';

export default function Tabs({ translateY }){

  const addclientcall = useRef(null);
  const AddClientCall = () => {
      addclientcall.current?.open();
  };
  
  const mycomissionscall = useRef(null);
  const MyComissionsCall = () => {
    mycomissionscall.current?.open();
  };

  return(
    <>
    <SafeAreaView>
      <Container style={{
        transform: [{
          translateY: translateY.interpolate({
            inputRange: [0, 380],
            outputRange: [0, 30],
            extrapolate: 'clamp'
          })
        }],
      }}>
          <TabsContainer>
            <TabItem onPress={AddClientCall}>
                <Icon name='person-add' size={24} color='#FFF'/>
                <TabText>Adicionar Cliente</TabText>
            </TabItem>
            <TabItem onPress={MyComissionsCall}>
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
      </SafeAreaView>

      <Modalize modalHeight={350} ref={addclientcall}><Text>Add Client</Text></Modalize>
      <Modalize modalHeight={350} ref={mycomissionscall}><Text>My Comissions</Text></Modalize>

    </>
  );
}

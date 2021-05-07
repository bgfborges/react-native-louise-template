import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import { Container, Content, Card, CardHeader, CardContent, CardFooter, Annotation, Title, Description, SafeAreaView, ImageBackground, CardBackground } from './styles';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';
import backmain from '../../assets/backmain.png';


export default function Main(){

  let offset = 0;
  const translateY = new Animated.Value(0);

  function onHandlerStateChanged(event) {

    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 100,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }

  }

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );

  return( 
    <ImageBackground
    source={backmain}
    >
      <Container barStyle="light-content">
        <SafeAreaView>
        <Header />
        <Content>
          <Menu translateY={translateY} />

          <PanGestureHandler
            onGestureEvent={animatedEvent}
            onHandlerStateChange={onHandlerStateChanged}
          >
            <Card style={{
              transform: [{ 
                translateY: translateY.interpolate({
                  inputRange: [-350, 0, 380],
                  outputRange: [-50, 0, 380],
                  extrapolate: 'clamp'
                  })
                }],
              }}
            >
                <CardBackground>
                  <CardHeader>
                    <Icon name="attach-money" size={28} color="#f5f5f5" />
                    <Icon name="visibility-off" size={28} color="#f5f5f5" />
                  </CardHeader>
                  <CardContent>
                    <Title>Comissões Disponíveis</Title>
                    <Description>R$48.569,00</Description>
                  </CardContent>
                  <CardFooter>
                    <Annotation>Pagamento de R$957,00 recebido de Kaoma Razia hoje as 17h.</Annotation>
                  </CardFooter>
              </CardBackground>
            </Card>
          </PanGestureHandler>
        </Content>
        <Tabs translateY={translateY} />
        </SafeAreaView>
      </Container>
    </ImageBackground>
  );
}
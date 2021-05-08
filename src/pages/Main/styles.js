import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';


export const Container = styled.View`
  flex: 1;
  padding-bottom: ${getStatusBarHeight()}px;
  justify-content: center;
  background: #2D1E5CC0;
`;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  resize-mode: cover;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;

export const Card = styled(Animated.View)`
  flex: 1;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
  background: #0A0A0AA9;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
  align-items: center;
`;

export const CardContent = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 15px;
  color: #fff;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #fff;
  font-weight: bold;
`;

export const CardFooter = styled.View`
  padding: 30px;
  background: #FFFAFF;
  border-radius: 4px;
`;

export const Annotation  = styled.Text`
  font-size: 12px;
  color: #333;
`;

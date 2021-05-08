import { Animated, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  height: 150px;
  margin-top: 30px;
  z-index: 1;
`;

export const TabsContainer = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: {paddingLeft: 10, paddingRight: 20},
    showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.TouchableOpacity`
    width: 110px;
    height: 115px;
    background: #69B2DCF5;
    border-radius: 3px;
    margin-left: 10px;
    padding: 20px;
    justify-content: space-between;
`;

export const TabText = styled.Text`
    font-size: 13px;
    color: #fff;
`;
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  // heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  background-color: #f2f2f2;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: ${wp('5%')}px;
`;

export const Presentation = styled.View`
  width: 100%;
  padding: 16px;
  margin: 40px 0;
`;
export const PresentationTitle = styled.Text`
  color: #5c40b6;
  font-size: 24px;
  text-align: center;
  font-weight: bold;
`;
export const PresentationDescription = styled.Text`
  color: #3f3d56;
  font-size: 14px;
  text-align: center;
  margin-top: 12px;
`;
export const WelcomeImage = styled.Image`
  width: 100%;
  height: 35%;
`;
export const ContainerButton = styled.View`
  width: 80%;
`;

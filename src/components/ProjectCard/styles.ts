import styled from 'styled-components/native';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';

export const Container = styled.View`
  background-color: #fff;
  width: 100%;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`;
export const CardImage = styled.Image`
  height: 190px;
  width: 100%;
  border-radius: 16px;
`;
export const ButtonContainer = styled.View`
  width: 35%;
  margin-top: 16px;
  align-self: flex-end;
`;
export const Btn = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
export const BtnTxt = styled.Text`
  color: #5c40b6;
  margin-right: 5px;
  font-size: 14px;
  text-transform: uppercase;
`;

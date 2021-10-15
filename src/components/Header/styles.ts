import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {NativeModules, Platform} from 'react-native';

const {StatusBarManager} = NativeModules;
export const Container = styled.View`
  background-color: #5c40b6;
  width: 100%;
  height: ${hp('11%')}px;
  padding-top: ${Platform.OS === 'ios'
    ? getStatusBarHeight() + 5
    : StatusBarManager.HEIGHT}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: ${wp('5%')}px;
  padding-right: ${wp('5%')}px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #f2f2f2;
`;
export const ButtonBack = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: flex-start;
`;
export const FakeView = styled.View`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: flex-start;
`;

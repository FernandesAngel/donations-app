import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background-color: #f2f2f2;
  flex: 1;
`;
export const Content = styled.View`
  background-color: #5c40b6;
  width: 100%;
  padding: 25px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
`;
export const ContentTitle = styled.Text`
  color: #f2f2f2;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;
export const ContentDescription = styled.Text`
  color: #f2f2f2;
`;
export const ContentImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 16px;
`;
export const DonateForm = styled.View`
  padding: 20px 20px;
`;

export const DonateTitle = styled.Text`
  font-size: 16px;
  margin-bottom: 24px;
  font-weight: bold;
`;
export const Input = styled.TextInput`
  width: 100%;
  height: 60px;
  background-color: #fff;
  /* border: 2px solid #5c40b6; */
  border-radius: 8px;
  padding: 15px;
  font-size: 16px;
`;
export const CheckboxContainer = styled.View``;
export const ErrorMessage = styled.Text`
  color: #b00020;
  margin-bottom: 16px;
`;

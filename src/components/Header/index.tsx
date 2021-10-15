import React from 'react';
import * as S from './styles';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {HeaderProps} from './interface';

export function Header({title}: HeaderProps) {
  const navigation = useNavigation();
  return (
    <S.Container>
      <S.ButtonBack activeOpacity={0.7} onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="chevron-left" size={24} color="#f2f2f2" />
      </S.ButtonBack>
      <S.Title>{title}</S.Title>
      <S.FakeView />
    </S.Container>
  );
}

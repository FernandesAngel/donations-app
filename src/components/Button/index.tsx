import React from 'react';
import {ActivityIndicator} from 'react-native';
import {ButtonProps} from './interfaces';
import * as S from './styles';

export function Button({title, load = false, ...rest}: ButtonProps) {
  return (
    <S.Container disabled={load} activeOpacity={0.7} {...rest}>
      {load ? (
        <ActivityIndicator size="small" color="#f2f2f2" />
      ) : (
        <S.Title>{title}</S.Title>
      )}
    </S.Container>
  );
}

import React from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import * as S from './styles';
import {CheckboxProps} from './interface';

export function Checkbox({label, value, onChange, checked}: CheckboxProps) {
  return (
    <S.Container activeOpacity={0.7} onPress={() => onChange(value)}>
      <S.Check>
        {value === checked && (
          <MaterialCommunityIcons name="check" size={22} color="#5c40b6" />
        )}
      </S.Check>
      <S.Label>{label}</S.Label>
    </S.Container>
  );
}

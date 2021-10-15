import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {useProject} from '../../hooks/project';
import {ItemProps} from './interfaces';
import * as S from './styles';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export function ProjectCard({item}: ItemProps) {
  const navigation = useNavigation();
  const {settingProject} = useProject();
  const handleNavigate = useCallback(() => {
    settingProject(item._id);
    navigation.navigate('Donate');
  }, [item._id, settingProject, navigation]);
  return (
    <S.Container>
      <S.Title>{item.name}</S.Title>
      <S.CardImage
        source={{
          uri: item.imageUrl,
        }}
        resizeMode="cover"
      />
      <S.ButtonContainer>
        <S.Btn activeOpacity={0.7} onPress={handleNavigate}>
          <S.BtnTxt>Ver mais</S.BtnTxt>
          <MaterialCommunityIcons
            name="arrow-right"
            size={18}
            color="#5c40b6"
          />
        </S.Btn>
      </S.ButtonContainer>
    </S.Container>
  );
}

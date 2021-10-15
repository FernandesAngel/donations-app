import React from 'react';
import * as S from './styles';
import WelcomeImg from '../../assets/welcome.png';
import {Button} from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'react-native';
export function Home() {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="#f2f2f2"
      />
      <S.Container>
        <S.WelcomeImage source={WelcomeImg} />
        <S.Presentation>
          <S.PresentationTitle>Donations lesgoo</S.PresentationTitle>
          <S.PresentationDescription>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </S.PresentationDescription>
        </S.Presentation>
        <S.ContainerButton>
          <Button
            onPress={() => navigation.navigate('Projects')}
            title="Conheça nossos projetos"
          />
        </S.ContainerButton>
      </S.Container>
    </>
  );
}

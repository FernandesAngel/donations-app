import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Header} from '../../components/Header';
import {ProjectCard} from '../../components/ProjectCard';
import {useProject} from '../../hooks/project';
import * as S from './styles';

export function Projects() {
  const {data, getProjects} = useProject();
  useEffect(() => {
    getProjects();
  }, [getProjects]);
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="#5c40b6"
      />
      <Header title="Projetos" />
      <S.Container>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item}) => <ProjectCard item={item} />}
          keyExtractor={item => String(item._id)}
          onEndReachedThreshold={0.1}
          ItemSeparatorComponent={() => <S.Separator />}
        />
      </S.Container>
    </>
  );
}

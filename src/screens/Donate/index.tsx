import React, {useCallback, useEffect, useState} from 'react';
import {Alert, StatusBar} from 'react-native';
import {Button} from '../../components/Button';
import {Checkbox} from '../../components/Checkbox';
import {Header} from '../../components/Header';
import {useDonation} from '../../hooks/donation';
import {useProject} from '../../hooks/project';
import {currencyMask} from '../../utils/masks';
import {dataMethod} from './dataMethod';
import * as S from './styles';

export function Donate() {
  const {donate, loading} = useDonation();
  const {project} = useProject();
  const [checked, setChecked] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState({errorPrice: '', errorMethod: ''});

  useEffect(() => {
    if (price) {
      setError(state => {
        return {...state, errorPrice: ''};
      });
    }
    if (checked) {
      setError(state => {
        return {...state, errorMethod: ''};
      });
    }
  }, [price, checked]);

  const handleCheck = useCallback((value: string) => {
    setChecked(value);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!price) {
      setError(state => {
        return {...state, errorPrice: 'Informe o valor da doação'};
      });
    }
    if (!checked) {
      setError(state => {
        return {...state, errorMethod: 'Informe o método de pagamento'};
      });
    }
    const result = await donate({project: project._id, price, method: checked});
    if (result) {
      setPrice('');
      setChecked('');
      Alert.alert('Muito obrigado pela sua doação!');
    }
  }, [price, checked, donate, project._id]);
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="#5c40b6"
      />
      <Header title="Doação" />
      <S.Container>
        <S.Content>
          <S.ContentImage
            source={{
              uri: project.imageUrl,
            }}
            resizeMode="cover"
          />
          <S.ContentTitle>{project.name}</S.ContentTitle>
          <S.ContentDescription>{project.description}</S.ContentDescription>
        </S.Content>
        <S.DonateForm>
          <S.DonateTitle>Faça sua doação!</S.DonateTitle>
          <S.Input
            placeholder="Valor da doação"
            value={price}
            onChangeText={text => setPrice(currencyMask(text))}
            keyboardType="number-pad"
          />
          <S.ErrorMessage>{error.errorPrice}</S.ErrorMessage>
          <S.CheckboxContainer>
            {dataMethod.map(method => (
              <Checkbox
                key={method.id}
                label={method.label}
                value={method.value}
                checked={checked}
                onChange={handleCheck}
              />
            ))}
          </S.CheckboxContainer>
          <S.ErrorMessage>{error.errorMethod}</S.ErrorMessage>
          <Button
            title="Doar"
            onPress={handleSubmit}
            load={loading}
            disabled={loading}
          />
        </S.DonateForm>
      </S.Container>
    </>
  );
}

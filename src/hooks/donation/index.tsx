import React from 'react';
import {createContext, useCallback, useContext, useState} from 'react';
import {Alert} from 'react-native';
import {api} from '../../services/api';
import {DonationContextData, DonationData} from './interfaces';

const DonationContext = createContext<DonationContextData>(
  {} as DonationContextData,
);

export function DonationProvider({children}: any) {
  const [loading, setLoading] = useState(false);

  const donate = useCallback(async (donation: DonationData) => {
    try {
      setLoading(true);
      const price = donation.price
        .replace('R$ ', '')
        .replace('.', '')
        .replace(',', '');
      await api.post('donations/create', {
        ...donation,
        price: Number(price),
      });
      setLoading(false);
      return true;
    } catch (err) {
      Alert.alert('Erro ao fazer doação');
      setLoading(false);
      return false;
    }
  }, []);

  return (
    <DonationContext.Provider
      value={{
        donate,
        loading,
      }}>
      {children}
    </DonationContext.Provider>
  );
}

export function useDonation(): DonationContextData {
  const context = useContext(DonationContext);

  return context;
}

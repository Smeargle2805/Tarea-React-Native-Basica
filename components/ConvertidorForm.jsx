import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import ApiService from './ApiService';
import { styles } from '../styles/convertidor';

const ConvertidorForm = ({ onConversion }) => {
  const [lempiras, setLempiras] = useState('');

  useEffect(() => {
    const obtenerTasaDeCambio = async () => {
      try {
        const tasaCambio = await ApiService.getTasaDeCambio();
      } catch (error) {
      }
    };

    obtenerTasaDeCambio();
  }, []);

  const convertirMoneda = async () => {
    try {
      const tasaCambio = await ApiService.getTasaDeCambio();
      const resultado = ApiService.convertirMoneda(lempiras, tasaCambio);
      onConversion(resultado.toFixed(2));
    } catch (error) {
    }
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Ingrese la cantidad en Lempiras"
        keyboardType="numeric"
        value={lempiras}
        onChangeText={(text) => setLempiras(text)}
      />
      <Button title="Convertir" onPress={convertirMoneda} />
    </View>
  );
};

export default ConvertidorForm;
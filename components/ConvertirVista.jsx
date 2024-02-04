import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ConvertidorForm from './ConvertidorForm';
import ResultadoConversor from './ResultadoConversor';
import Encabezado from './Encabezado';
import { styles } from '../styles/vista';

const ConvertidorScreen = () => {
  const [resultado, setResultado] = useState('');

  return (
    <View style={styles.container}>
      <Encabezado/>
      <ConvertidorForm onConversion={setResultado} />
      <ResultadoConversor dolares={resultado} />
    </View>
  );
};

export default ConvertidorScreen;
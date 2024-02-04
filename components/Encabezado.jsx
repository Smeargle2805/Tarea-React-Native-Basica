import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/encabezado';

const Encabezado = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Conversor de Lempiras a Dólares</Text>
    </View>
  );
};

export default Encabezado;
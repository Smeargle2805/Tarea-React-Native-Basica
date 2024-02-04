import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/resultado';

const ResultadoConversor = ({ dolares }) => {
  return (
    <View style={styles.resultContainer}>
      {dolares !== '' && <Text>{`Equivalente en Dólares: $${dolares}`}</Text>}
    </View>
  );
};

export default ResultadoConversor;
import React from 'react';
import { View, Text } from 'react-native';
import CalcButton from '../components/CalcButton';
import { globalStyles } from '../theme';
import colors from '../constants/colors';

const CalculatorScreen = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <Text style={globalStyles.smallResult}>1,500.00</Text>
      <Text style={globalStyles.result}>1,500.00</Text>
      <View style={globalStyles.row}>
        {/* Boton */}
        <CalcButton textColor="black" color={colors.lightGray} text="C" />
        <CalcButton textColor="black" color={colors.lightGray} text="+/-" />
        <CalcButton textColor="black" color={colors.lightGray} text="del" />
        <CalcButton color={colors.orange} text="/" />
      </View>
    </View>
  );
};

export default CalculatorScreen;

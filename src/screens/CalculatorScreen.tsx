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
      {/* Button row */}
      <View style={globalStyles.row}>
        <CalcButton color={colors.lightGray} text="C" />
        <CalcButton color={colors.lightGray} text="+/-" />
        <CalcButton color={colors.lightGray} text="del" />
        <CalcButton color={colors.orange} text="/" />
      </View>
      {/* Button row */}
      <View style={globalStyles.row}>
        <CalcButton text="7" />
        <CalcButton text="8" />
        <CalcButton text="9" />
        <CalcButton color={colors.orange} text="X" />
      </View>
      {/* Button row */}
      <View style={globalStyles.row}>
        <CalcButton text="4" />
        <CalcButton text="5" />
        <CalcButton text="6" />
        <CalcButton color={colors.orange} text="-" />
      </View>
      {/* Button row */}
      <View style={globalStyles.row}>
        <CalcButton text="1" />
        <CalcButton text="2" />
        <CalcButton text="3" />
        <CalcButton color={colors.orange} text="+" />
      </View>
      {/* Button row */}
      <View style={globalStyles.row}>
        <CalcButton text="0" stretch />
        <CalcButton text="." />
        <CalcButton color={colors.orange} text="=" />
      </View>
    </View>
  );
};

export default CalculatorScreen;

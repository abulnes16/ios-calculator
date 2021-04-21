import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CalcButton from '../components/CalcButton';
import { globalStyles } from '../theme';
import colors from '../constants/colors';

const CalculatorScreen = () => {
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');

  const clean = () => {
    setNumber('0');
    setPreviousNumber('0');
  };

  const makeNumber = (numberText: string) => {
    // Evitar doble punto decimal
    if (number.includes('.') && numberText === '.') {
      return;
    }

    let newNumber = number;

    newNumber =
      number !== '0' || numberText === '.' ? number + numberText : numberText;

    setNumber(newNumber);
  };

  const numberSign = () => {
    let replaceNumber = '';
    if (number.includes('-')) {
      replaceNumber = number.replace('-', '');
    } else {
      replaceNumber = '-' + number;
    }

    setNumber(replaceNumber);
  };

  return (
    <View style={globalStyles.calculatorContainer}>
      <Text style={globalStyles.smallResult}>{previousNumber}</Text>
      <Text style={globalStyles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      {/* Button row */}
      <View style={globalStyles.row}>
        <CalcButton onPress={clean} color={colors.lightGray} text="C" />
        <CalcButton onPress={numberSign} color={colors.lightGray} text="+/-" />
        <CalcButton color={colors.lightGray} text="del" />
        <CalcButton color={colors.orange} text="/" />
      </View>
      {/* Button row */}
      <View style={globalStyles.row}>
        <CalcButton onPress={makeNumber} text="7" />
        <CalcButton onPress={makeNumber} text="8" />
        <CalcButton onPress={makeNumber} text="9" />
        <CalcButton color={colors.orange} text="X" />
      </View>
      {/* Button row */}
      <View style={globalStyles.row}>
        <CalcButton onPress={makeNumber} text="4" />
        <CalcButton onPress={makeNumber} text="5" />
        <CalcButton onPress={makeNumber} text="6" />
        <CalcButton color={colors.orange} text="-" />
      </View>
      {/* Button row */}
      <View style={globalStyles.row}>
        <CalcButton onPress={makeNumber} text="1" />
        <CalcButton onPress={makeNumber} text="2" />
        <CalcButton onPress={makeNumber} text="3" />
        <CalcButton color={colors.orange} text="+" />
      </View>
      {/* Button row */}
      <View style={globalStyles.row}>
        <CalcButton onPress={makeNumber} text="0" stretch />
        <CalcButton onPress={makeNumber} text="." />
        <CalcButton color={colors.orange} text="=" />
      </View>
    </View>
  );
};

export default CalculatorScreen;

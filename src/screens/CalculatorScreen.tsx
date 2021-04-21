import React from 'react';
import { View, Text } from 'react-native';
import CalcButton from '../components/CalcButton';
import { globalStyles } from '../theme';
import colors from '../constants/colors';
import useCalculator from '../hooks/useCalculator';

const CalculatorScreen = () => {
  const {
    number,
    previousNumber,
    functions: { calculate, clean, deleteNumber, makeNumber, numberSign },
    buttons: { btnDivide, btnMult, btnSum, btnSubstract },
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      {previousNumber !== '0' && (
        <Text style={globalStyles.smallResult}>{previousNumber}</Text>
      )}
      <Text style={globalStyles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      {/* Button row */}
      <View style={globalStyles.row}>
        <CalcButton onPress={clean} color={colors.lightGray} text="C" />
        <CalcButton onPress={numberSign} color={colors.lightGray} text="+/-" />
        <CalcButton
          onPress={deleteNumber}
          color={colors.lightGray}
          text="del"
        />
        <CalcButton onPress={btnDivide} color={colors.orange} text="/" />
      </View>
      {/* Button row */}
      <View style={globalStyles.row}>
        <CalcButton onPress={makeNumber} text="7" />
        <CalcButton onPress={makeNumber} text="8" />
        <CalcButton onPress={makeNumber} text="9" />
        <CalcButton onPress={btnMult} color={colors.orange} text="X" />
      </View>
      {/* Button row */}
      <View style={globalStyles.row}>
        <CalcButton onPress={makeNumber} text="4" />
        <CalcButton onPress={makeNumber} text="5" />
        <CalcButton onPress={makeNumber} text="6" />
        <CalcButton onPress={btnSubstract} color={colors.orange} text="-" />
      </View>
      {/* Button row */}
      <View style={globalStyles.row}>
        <CalcButton onPress={makeNumber} text="1" />
        <CalcButton onPress={makeNumber} text="2" />
        <CalcButton onPress={makeNumber} text="3" />
        <CalcButton onPress={btnSum} color={colors.orange} text="+" />
      </View>
      {/* Button row */}
      <View style={globalStyles.row}>
        <CalcButton onPress={makeNumber} text="0" stretch />
        <CalcButton onPress={makeNumber} text="." />
        <CalcButton onPress={calculate} color={colors.orange} text="=" />
      </View>
    </View>
  );
};

export default CalculatorScreen;

import React, { useState, useRef } from 'react';
import { View, Text, Alert } from 'react-native';
import CalcButton from '../components/CalcButton';
import { globalStyles } from '../theme';
import colors from '../constants/colors';

enum Operators {
  sum,
  substract,
  multiplication,
  division,
}

const CalculatorScreen = () => {
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');

  const lastOperation = useRef<Operators>();

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

  const deleteNumber = () => {
    let newNumber = number;
    let negative = '';
    if (number.includes('-')) {
      negative = '-';
      newNumber = number.replace('-', '');
    }

    if (newNumber.length === 1) {
      newNumber = '0';
    } else {
      newNumber = negative + newNumber.slice(0, -1);
    }

    setNumber(newNumber);
  };

  const changeArithmeticNumber = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber('0');
  };

  const btnDivide = () => {
    changeArithmeticNumber();
    lastOperation.current = Operators.division;
  };
  const btnMult = () => {
    changeArithmeticNumber();
    lastOperation.current = Operators.multiplication;
  };
  const btnSubstract = () => {
    changeArithmeticNumber();
    lastOperation.current = Operators.substract;
  };
  const btnSum = () => {
    changeArithmeticNumber();
    lastOperation.current = Operators.sum;
  };

  const calculate = () => {
    const num1 = Number(previousNumber);
    const num2 = Number(number);

    switch (lastOperation.current) {
      case Operators.sum:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.substract:
        setNumber(`${num1 - num2}`);
        break;
      case Operators.multiplication:
        setNumber(`${num1 * num2}`);
        break;
      case Operators.division:
        if (num2 === 0) {
          Alert.alert('División entre 0', 'No se puede dividir entre 0');
          return;
        }
        setNumber(`${num1 / num2}`);
        break;
      default:
        break;
    }

    setPreviousNumber('0');
  };

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

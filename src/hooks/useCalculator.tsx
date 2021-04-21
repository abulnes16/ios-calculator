import { useState, useRef } from 'react';
import { Alert } from 'react-native';
import Operators from '../types/operators';
const useCalculator = () => {
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

  return {
    number,
    previousNumber,
    functions: {
      clean,
      makeNumber,
      calculate,
      numberSign,
      deleteNumber,
    },
    buttons: {
      btnDivide,
      btnMult,
      btnSum,
      btnSubstract,
    },
  };
};

export default useCalculator;

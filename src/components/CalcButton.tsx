import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';
interface Props {
  text: string;
  color?: string;
  textColor?: string;
  onPress?: () => void;
}

const CalcButton = ({
  text,
  color = colors.darkGray,
  textColor = 'white',
}: Props) => {
  return (
    <View style={[styles.button, { backgroundColor: color }]}>
      <Text style={[styles.buttonText, { color: textColor }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },

  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: '300',
  },
});
export default CalcButton;

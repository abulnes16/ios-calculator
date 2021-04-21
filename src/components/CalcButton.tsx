/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';
interface Props {
  text: string;
  color?: string;
  stretch?: boolean;
  onPress?: () => void;
}

const CalcButton = ({
  text,
  color = colors.darkGray,
  stretch = false,
}: Props) => {
  return (
    <TouchableOpacity>
      <View
        style={[
          styles.button,
          { backgroundColor: color, width: stretch ? 180 : 80 },
        ]}>
        <Text
          style={{
            ...styles.buttonText,
            color: color === colors.lightGray ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
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

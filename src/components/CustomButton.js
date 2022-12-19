import {Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

import {white} from '../constants/colors';

const CustomButton = ({onPress, title}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    width: '80%',
    backgroundColor: 'red',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins-SemiBold',
    borderRadius: 57,
  },
  buttonText: {
    color: white,
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});
export default CustomButton;

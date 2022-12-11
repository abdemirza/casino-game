import {Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

import {white} from '../constants/colors';

const CustomButton = () => {
  return (
    <Pressable
      style={styles.button}
      onPress={() => {
        console.log('Hello, I am a button');
      }}>
      <Text style={styles.buttonText}>Start the game</Text>
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

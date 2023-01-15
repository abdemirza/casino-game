import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MyAppText from './MyAppText';
import {white} from '../constants/colors';

import LinearGradient from 'react-native-linear-gradient';

const Card = ({symbol}) => {
  return (
    <LinearGradient
      colors={['#E48900', '#fff', '#fff', '#fff', '#E48900']}
      style={styles.container}>
      <MyAppText style={{fontSize: 80}}>{symbol}</MyAppText>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 108,
    height: 153,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Card;

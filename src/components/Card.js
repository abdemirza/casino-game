import React from 'react';
import MyAppText from './MyAppText';

import LinearGradient from 'react-native-linear-gradient';
import {ScaledSheet} from 'react-native-size-matters';

const Card = ({symbol}) => {
  return (
    <LinearGradient
      colors={['#E48900', '#fff', '#fff', '#fff', '#E48900']}
      style={styles.container}>
      <MyAppText style={styles.symbolText}>{symbol}</MyAppText>
    </LinearGradient>
  );
};
const styles = ScaledSheet.create({
  container: {
    width: '100@s',
    height: '140@vs',
    borderRadius: '8@s',
    alignItems: 'center',
    justifyContent: 'center',
  },
  symbolText: {fontSize: '80@s'},
});
export default Card;

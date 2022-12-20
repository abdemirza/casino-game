import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {white} from '@constants/colors';

const MyAppText = ({children, style}) => {
  return (
    <View>
      <Text style={[styles.defaultStyle, style]}>{children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  defaultStyle: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: white,
  },
});
export default MyAppText;

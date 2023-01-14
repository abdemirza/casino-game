import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {white} from '../../constants/colors';

import MyAppText from '../MyAppText';

const TableHeader = () => {
  return (
    <View style={styles.container}>
      <MyAppText style={styles.heading}>Combinations</MyAppText>
      <MyAppText style={styles.heading}>Points</MyAppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: white,
    height: 44,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 19,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  heading: {
    color: '#3D6670',
    fontSize: 14,
  },
});
export default TableHeader;

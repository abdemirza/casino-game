import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {borderColor, white} from '../../constants/colors';

import MyAppText from '../MyAppText';

const TableRow = ({bottomContainer}) => {
  return (
    <View style={[styles.container, bottomContainer && styles.bottomContainer]}>
      <View style={styles.row}>
        <MyAppText style={styles.heading}>♠</MyAppText>
        <MyAppText style={styles.heading}>♦</MyAppText>
        <MyAppText style={styles.heading}>♣</MyAppText>
      </View>
      <MyAppText style={styles.score}>0.5</MyAppText>
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
    borderBottomWidth: 1,
    borderBottomColor: borderColor,
  },
  bottomContainer: {
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    borderBottomWidth: 0,
  },
  heading: {
    color: '#3D6670',
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
    paddingLeft: 10,
  },
  score: {
    color: '#3D6670',
  },
});
export default TableRow;

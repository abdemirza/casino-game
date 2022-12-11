import {View, StyleSheet, Image, Text} from 'react-native';
import React from 'react';

import {primary, white} from '../constants/colors';
import CustomButton from '../components/CustomButton';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.blueContainer}></View>
      <View style={styles.whiteContainer}>
        <View />
        <CustomButton />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    height: '100%',
  },
  blueContainer: {
    height: '40%',
    backgroundColor: primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteContainer: {
    flex: 1,
    alignItems: 'center',
    height: '60%',
    backgroundColor: white,
    justifyContent: 'space-between',
  },
});
export default MainScreen;

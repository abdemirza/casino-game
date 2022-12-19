import {View, StyleSheet, Image, Text} from 'react-native';
import React from 'react';

import {primary, white} from '../constants/colors';
import CustomButton from '@components/CustomButton';

import ic_dollar from '@images/ic_dollar.png';

const MainScreen = () => {
  const onPressHandler = () => {
    console.log('Hey! I am a prop');
  };
  return (
    <View style={styles.container}>
      <View style={styles.blueContainer}>
        <Image source={ic_dollar} style={styles.dollarIcon} />
        <Text style={styles.heading}>TOTAL BALANCE</Text>
        <Text style={styles.balanceText}>24 358.50</Text>
      </View>
      <View style={styles.whiteContainer}>
        <View />
        <CustomButton onPress={onPressHandler} title="Start the game" />
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
  },
  whiteContainer: {
    flex: 1,
    alignItems: 'center',
    height: '60%',
    backgroundColor: white,
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 14,
    fontFamily: 'Nunito-Bold',
    color: 'white',
    marginBottom: 3,
  },
  balanceText: {
    fontSize: 32,
    fontFamily: 'SairaSemiCondensed-SemiBold',
    color: 'white',
  },
  dollarIcon: {
    marginBottom: 10,
    marginTop: 36,
  },
});
export default MainScreen;

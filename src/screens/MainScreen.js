import {View, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';

import {primary, white} from '../constants/colors';
import CustomButton from '@components/CustomButton';

import ic_dollar from '@images/ic_dollar.png';
import MyAppText from '../components/MyAppText';
import Table from '../components/Table/Table';
import SpinPopup from '../components/SpinPopup';

export const symbols = ['♠', '♦', '♣'];

const MainScreen = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const onPressHandler = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.blueContainer}>
        <Image source={ic_dollar} style={styles.dollarIcon} />
        <MyAppText style={styles.heading}>TOTAL BALANCE</MyAppText>
        <MyAppText style={styles.balanceText}>24 358.50</MyAppText>
      </View>
      <View style={styles.whiteContainer}>
        <View />
        <CustomButton onPress={onPressHandler} title="Start the game" />
      </View>
      <Table />
      <SpinPopup visible={popupVisible} setVisible={setPopupVisible} />
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

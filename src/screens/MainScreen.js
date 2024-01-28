import {View, Image, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';

import {primary, white} from '../constants/colors';
import CustomButton from '@components/CustomButton';

import ic_dollar from '@images/ic_dollar.png';
import MyAppText from '../components/MyAppText';
import Table from '../components/Table/Table';
import SpinPopup from '../components/SpinPopup';
import {ScaledSheet, vs} from 'react-native-size-matters';
import GameOver from '../components/GameOver';

export const symbols = ['♠', '♦', '♣', '♥'];
export const initBalance = 20;
export const costPerSpin = 2;
export const threeSpades = 5;
export const threeOfAkind = 2;
export const twoOfAkind = 0.5;

const {height} = Dimensions.get('window');

const MainScreen = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [gameOverVisible, setGameOverVisible] = useState(false);
  const [balance, setBalance] = useState(initBalance);
  const [card1, setCard1] = useState(0);
  const [card2, setCard2] = useState(0);
  const [card3, setCard3] = useState(0);
  const [tableData, setTableData] = useState([]);

  const onPressHandler = () => {
    setPopupVisible(!popupVisible);
  };

  const onRestartHandler = () => {
    setBalance(initBalance);
    setGameOverVisible(false);
    setTableData([]);
  };

  useEffect(() => {
    if (balance < costPerSpin) {
      setPopupVisible(false);
      setGameOverVisible(true);
    }
  }, [balance]);

  return (
    <View style={styles.container}>
      {!gameOverVisible ? (
        <>
          <View style={styles.blueContainer}>
            <Image source={ic_dollar} style={styles.dollarIcon} />
            <MyAppText style={styles.heading}>TOTAL BALANCE</MyAppText>
            <MyAppText style={styles.balanceText}>{balance}</MyAppText>
          </View>
          <View style={styles.whiteContainer}>
            <View />
            <View
              style={[
                styles.buttonContainer,
                height <= 670 ? {} : {height: vs(50)},
              ]}>
              <CustomButton onPress={onPressHandler} title="Start the game" />
            </View>
          </View>
          <View style={{backgroundColor: primary, height: '100%'}} />
          <Table data={tableData} />
        </>
      ) : (
        <View style={{backgroundColor: primary, height: '100%'}} />
      )}
      <View style={{backgroundColor: primary, height: '100%'}} />
      <GameOver
        onRestartHandler={onRestartHandler}
        visible={gameOverVisible}
        data={{card1, card2, card3}}
        balance={balance}
      />
      <SpinPopup
        data={{card1, card2, card3}}
        setData={{setCard1, setCard2, setCard3}}
        visible={popupVisible}
        setVisible={setPopupVisible}
        balance={balance}
        setBalance={setBalance}
        tableData={tableData}
        setTableData={setTableData}
      />
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    height: '100%',
  },
  blueContainer: {
    height: '40%',
    backgroundColor: primary,
    alignItems: 'center',
  },
  whiteContainer: {
    alignItems: 'center',
    height: '60%',
    backgroundColor: white,
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: '14@s',
    fontFamily: 'Nunito-Bold',
    color: 'white',
    marginBottom: '3@vs',
  },
  balanceText: {
    fontSize: '32@s',
    fontFamily: 'SairaSemiCondensed-SemiBold',
    color: 'white',
  },
  dollarIcon: {
    marginBottom: '10@vs',
    marginTop: '36@vs',
  },
  buttonContainer: {
    height: '80@vs',
    width: '100%',
    alignItems: 'center',
  },
});
export default MainScreen;

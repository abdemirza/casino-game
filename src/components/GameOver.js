import {View, Modal} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {white} from '@constants/colors';
import MyAppText from './MyAppText';
import {symbols} from '../screens/MainScreen';
import CustomButton from './CustomButton';
import LinearGradient from 'react-native-linear-gradient';

const GameOver = ({data, visible, onRestartHandler, balance}) => {
  console.log(data);
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.container}>
        <LinearGradient
          colors={['#F63737', '#C20707']}
          style={styles.headingContainer}>
          <MyAppText style={styles.heading}>You Lose!</MyAppText>
        </LinearGradient>
        <View style={styles.symbolContainer}>
          <MyAppText style={styles.symbol}>{symbols[data.card1]}</MyAppText>
          <MyAppText style={styles.symbol}>{symbols[data.card2]}</MyAppText>
          <MyAppText style={styles.symbol}>{symbols[data.card3]}</MyAppText>
        </View>
        <View style={styles.scoreContainer}>
          <MyAppText style={styles.score}>{balance}</MyAppText>
          <MyAppText style={styles.scoreSubText}>Your Score</MyAppText>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            onPress={onRestartHandler}
            style={styles.button}
            title="Restart Game!"
          />
        </View>
      </View>
    </Modal>
  );
};
const styles = ScaledSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'white',
    bottom: 0,
    borderTopEndRadius: '10@s',
    borderTopStartRadius: '10@s',
    justifyContent: 'space-between',
    paddingHorizontal: '20@s',
    paddingVertical: '19@vs',
  },
  headingContainer: {
    height: '126@vs',
    width: '100%',
    backgroundColor: white,
    borderRadius: '8@s',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    height: '80@vs',
    alignItems: 'center',
    justifyContent: 'center',
  },
  symbolContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
  },
  symbol: {
    marginHorizontal: '13.5@s',
    fontSize: '50@s',
  },
  score: {
    fontSize: '56@s',
  },
  scoreSubText: {
    fontSize: '20@s',
    // fontFamily: 'Poppins-Regular',
  },
  heading: {
    fontFamily: 'CherryBomb-Regular',
    fontSize: '60@s',
    color: white,
  },
});
export default GameOver;

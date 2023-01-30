import {View, Modal, Image, Pressable} from 'react-native';
import React from 'react';

import ic_close from '@images/ic_close.png';

import Card from './Card';
import {symbols} from '../screens/MainScreen';
import CustomButton from './CustomButton';

import LinearGradient from 'react-native-linear-gradient';
import {ScaledSheet} from 'react-native-size-matters';

const SpinPopup = ({visible, setVisible, data, setData}) => {
  const onExitHandler = () => {
    setVisible(!visible);
  };

  const getRandomNumber = () => {
    const randNum = Math.floor(Math.random() * 4);
    return randNum;
  };

  const onSpinPress = () => {
    setData.setCard1(getRandomNumber());
    setData.setCard2(getRandomNumber());
    setData.setCard3(getRandomNumber());
  };

  return (
    <Modal visible={visible} transparent={true}>
      <LinearGradient colors={['#FECF15', '#E48900']} style={styles.container}>
        <View style={styles.crossContainer}>
          <Pressable onPress={onExitHandler}>
            <Image source={ic_close} />
          </Pressable>
        </View>
        <View style={styles.cardContainer}>
          <Card symbol={symbols[data.card1]} />
          <Card symbol={symbols[data.card2]} />
          <Card symbol={symbols[data.card3]} />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 120,
          }}>
          <CustomButton
            onPress={onSpinPress}
            title="spin"
            style={{width: 343}}
          />
        </View>
      </LinearGradient>
    </Modal>
  );
};

const styles = ScaledSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '50%',
    backgroundColor: '#FECF15',
    bottom: 0,
    borderTopEndRadius: '10@s',
    borderTopStartRadius: '10@s',
    justifyContent: 'space-between',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '10@s',
  },
  crossContainer: {
    height: '50@vs',
    flexDirection: 'row-reverse',
    padding: '10@s',
  },
});

export default SpinPopup;

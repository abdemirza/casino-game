import {View, Text, StyleSheet, Modal, Image, Pressable} from 'react-native';
import React from 'react';

import ic_close from '@images/ic_close.png';
// import ic_spades from '@images/cardsSymbols';

import Card from './Card';
import {symbols} from '../screens/MainScreen';
import CustomButton from './CustomButton';

import LinearGradient from 'react-native-linear-gradient';

const SpinPopup = ({visible, setVisible}) => {
  const onPressHandler = () => {
    setVisible(!visible);
  };
  return (
    <Modal visible={visible} transparent={true}>
      <LinearGradient colors={['#FECF15', '#E48900']} style={styles.container}>
        <View style={styles.crossContainer}>
          <Pressable onPress={onPressHandler}>
            <Image source={ic_close} />
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
          }}>
          <Card symbol={symbols[0]} />
          <Card symbol={symbols[1]} />
          <Card symbol={symbols[2]} />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 120,
          }}>
          <CustomButton title="spin" style={{width: 343}} />
        </View>
      </LinearGradient>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '50%',
    backgroundColor: '#FECF15',
    bottom: 0,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    justifyContent: 'space-between',
  },
  crossContainer: {
    height: 50,
    flexDirection: 'row-reverse',
    padding: 10,
  },
});

export default SpinPopup;

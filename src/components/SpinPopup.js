import {View, Modal, Image, Pressable} from 'react-native';
import React, {useState} from 'react';

import ic_close from '@images/ic_close.png';

import Card from './Card';
import {
  costPerSpin,
  symbols,
  threeOfAkind,
  threeSpades,
  twoOfAkind,
} from '../screens/MainScreen';
import CustomButton from './CustomButton';

import LinearGradient from 'react-native-linear-gradient';
import {ScaledSheet} from 'react-native-size-matters';

const SpinPopup = ({
  visible,
  setVisible,
  data,
  setData,
  balance,
  setBalance,
  tableData,
  setTableData,
}) => {
  const onExitHandler = () => {
    setVisible(!visible);
  };

  const [firstClick, setFirstClick] = useState(true);

  const getRandomNumber = () => {
    const randNum = Math.floor(Math.random() * 4);
    return randNum;
  };

  const onSpinPress = () => {
    const card1 = getRandomNumber();
    const card2 = getRandomNumber();
    const card3 = getRandomNumber();
    setData.setCard1(card1);
    setData.setCard2(card2);
    setData.setCard3(card3);
    // check if we have enough balance
    if (balance >= costPerSpin) {
      // three of a kind
      if (card1 === card2 && card2 === card3 && !firstClick) {
        if (card1 === 0 && card2 === 0 && card3 === 0) {
          setBalance(balance + threeSpades - costPerSpin);
          setTableData([
            ...tableData,
            {
              card1,
              card2,
              card3,
              point: threeSpades,
            },
          ]);
        } else {
          setBalance(balance + threeOfAkind - costPerSpin);
          setTableData([
            ...tableData,
            {
              card1,
              card2,
              card3,
              point: threeOfAkind,
            },
          ]);
        }
      }
      // two of a kind
      else if (card1 === card2 || card2 === card3 || card3 === card1) {
        setBalance(balance + twoOfAkind - costPerSpin);
        setTableData([
          ...tableData,
          {
            card1,
            card2,
            card3,
            point: twoOfAkind,
          },
        ]);
      } else {
        setTableData([
          ...tableData,
          {
            card1,
            card2,
            card3,
            point: 0,
          },
        ]);
        setBalance(balance - costPerSpin);
      }
    }
    // when we do not have enough balance
    else {
      alert('Game Over, Try Again');
    }
    setFirstClick(false);
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

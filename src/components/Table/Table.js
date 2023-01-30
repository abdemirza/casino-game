import {ScrollView, View} from 'react-native';
import React from 'react';

import TableHeader from './TableHeader';
import TableRow from './TableRow';
import {ScaledSheet} from 'react-native-size-matters';

const Table = () => {
  const data = [1, 2, 3, 4, 5, 6];

  return (
    <View style={styles.container}>
      <TableHeader />
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        {data.map((datum, index) => (
          <TableRow key={index} bottomContainer={index == data.length - 1} />
        ))}
      </ScrollView>
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    position: 'absolute',
    width: '303@s',
    shadowColor: '#000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    left: '25@s',
    top: '180@vs',
  },
  scrollContainer: {
    height: '180@vs',
    borderBottomEndRadius: '10@s',
    borderBottomStartRadius: '10@s',
  },
});
export default Table;

import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';

import TableHeader from './TableHeader';
import TableRow from './TableRow';

const Table = () => {
  const data = [1, 2, 3, 4, 5, 6];

  return (
    <View style={styles.container}>
      <TableHeader />
      <ScrollView
        style={{
          height: 180,
          borderBottomEndRadius: 10,
          borderBottomStartRadius: 10,
        }}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        {data.map((datum, index) => (
          <TableRow key={index} bottomContainer={index == data.length - 1} />
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 343,
    shadowColor: 'yello',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    left: 25,
    top: 180,
  },
});
export default Table;

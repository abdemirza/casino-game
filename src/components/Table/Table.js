import {StyleSheet, View} from 'react-native';
import React from 'react';

import TableHeader from './TableHeader';
import TableRow from './TableRow';

const Table = () => {
  return (
    <View style={styles.container}>
      <TableHeader />
      <TableRow />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 343,
  },
});
export default Table;

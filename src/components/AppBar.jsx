import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppBarTab from './AppBarTab';
import Constants from 'expo-constants';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.background,
    display: 'flex',
    flexDirection: 'row',
  },
  tabs: {
    flexGrow: 0,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <AppBarTab tabTitle={'Repositories'} />
      </View>
    </View>
  );
};

export default AppBar;

import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppBarTab from './AppBarTab';
import Constants from 'expo-constants';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.TabBackground,
  },
  scroll: {
    display: 'flex',
    flexDirection: 'row',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab tabTitle={'Repositories'} link='/' />
        <AppBarTab tabTitle={'Sign in'} link='sign-in' />
      </ScrollView>
    </View>
  );
};

export default AppBar;

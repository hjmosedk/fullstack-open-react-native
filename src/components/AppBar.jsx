import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppBarTab from './AppBarTab';
import Constants from 'expo-constants';
import { useQuery, useApolloClient } from '@apollo/client';
import { useHistory } from 'react-router-native';

import useAuthStorage from '../hooks/useAuthStorage';
import { GET_AUTH_USER } from '../graphql/queries';
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
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const history = useHistory();
  const { data } = useQuery(GET_AUTH_USER);

  const authorizedUser = data ? data.authorizedUser : null;

  const SignOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    history.push('/');
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab tabTitle={'Repositories'} link='/' onPress={() => {}} />
        {!authorizedUser && (
          <AppBarTab tabTitle={'Sign in'} link='sign-in' onPress={() => {}} />
        )}
        {authorizedUser && (
          <AppBarTab tabTitle={'Sign Out'} link='/' onPress={SignOut} />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;

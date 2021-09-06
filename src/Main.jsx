import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import AppBar from './components/AppBar';
import RepositoryList from './components/RepositoryList';
import SingleRepository from './components/SingleRepository';
import SignIn from './components/SignIn';
import Review from './components/Review';
import SignUp from './components/SignUp';

import theme from './theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path='/' exact>
          <RepositoryList />
        </Route>
        <Route path='/sign-in' exact>
          <SignIn />
        </Route>
        <Route path='/review' exact>
          <Review />
        </Route>
        <Route path='/sign-up' exact>
          <SignUp />
        </Route>
        <Route path='/:id' exact>
          <SingleRepository />
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
  );
};

export default Main;

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import { Provider as PaperProvider } from 'react-native-paper';

import AppBar from './components/AppBar';
import RepositoryList from './components/RepositoryList';
import SingleRepository from './components/SingleRepository';
import SignIn from './components/SignIn';
import Review from './components/Review';
import SignUp from './components/SignUp';
import UserReviews from './components/UserReviews';

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
    <PaperProvider>
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
          <Route path='/UserReviews' exact>
            <UserReviews />
          </Route>
          <Route path='/:id' exact>
            <SingleRepository />
          </Route>

          <Redirect to='/' />
        </Switch>
      </View>
    </PaperProvider>
  );
};

export default Main;

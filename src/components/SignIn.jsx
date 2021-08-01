import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 15,
  },
  inputContainer: {
    paddingHorizontal: 15,
  },
  inputFields: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: theme.colors.background,
    padding: 10,
    borderRadius: 5,
  },
});

const initialValues = {
  username: '',
  password: '',
};

const onSubmit = (values) => {
  console.log(values);
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <FormikTextInput
          name='username'
          placeholder='Username'
          style={styles.inputFields}
          color={'textSecondary'}
        />
        <FormikTextInput
          name='password'
          placeholder='Password'
          secureTextEntry
          style={styles.inputFields}
          color={'textSecondary'}
        />
        <Button onPress={onSubmit} title='Sign In' />
      </View>
    </View>
  );
};

const SignIn = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;

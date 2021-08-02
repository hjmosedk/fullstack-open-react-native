import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput';

import theme from '../theme';

const ValidationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Username must have more then 5 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(25, 'Username must have more then 25 characters')
    .required('Password is required'),
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 15,
  },
  inputContainer: {
    paddingHorizontal: 15,
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
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={ValidationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;

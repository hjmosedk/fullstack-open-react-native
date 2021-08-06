import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput';
import { useHistory } from 'react-router-native';

import useSignIn from '../hooks/useSignIn';

import theme from '../theme';

const ValidationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
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

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <FormikTextInput
          name='username'
          placeholder='Username'
          style={styles.inputFields}
          color={'textSecondary'}
          testID='username'
        />
        <FormikTextInput
          name='password'
          placeholder='Password'
          secureTextEntry
          style={styles.inputFields}
          color={'textSecondary'}
          testID='password'
        />
        <Button testID='login' onPress={onSubmit} title='Sign In' />
      </View>
    </View>
  );
};

export const SignInContainer = ({ onSubmit }) => {
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

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;

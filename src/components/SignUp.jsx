import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput';
import { useHistory } from 'react-router-native';
import theme from '../theme';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';

const ValidationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'The two passwords must match')
    .required('Password confirmation is required'),
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
  confirmPassword: '',
};

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <FormikTextInput
          name='username'
          placeholder='Username'
          color={'textSecondary'}
        />
        <FormikTextInput
          name='password'
          placeholder='Password'
          secureTextEntry
          color={'textSecondary'}
        />
        <FormikTextInput
          name='confirmPassword'
          placeholder='Password Confirm'
          secureTextEntry
          keyboardType='number-pad'
          color={'textSecondary'}
        />
        <Button onPress={onSubmit} title='Sign Up' />
      </View>
    </View>
  );
};

export const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={ValidationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      try {
        await signUp({ username, password });
      } catch (error) {
        console.log(error);
        throw error;
      } finally {
        await signIn({ username, password });
        history.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;

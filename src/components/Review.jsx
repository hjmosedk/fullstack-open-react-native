import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput';
import useCreateReview from '../hooks/useCreateReview';
import { useHistory } from 'react-router-native';
import theme from '../theme';

const ValidationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner name is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup
    .number('Rating must be a number')
    .min(0, 'Rating must be more then 0')
    .max(100, 'Rating must be less then 100')
    .required('You must input a valid rating'),
  text: yup.string(),
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
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <FormikTextInput
          name='ownerName'
          placeholder='Repository owner name'
          style={styles.inputFields}
          color={'textSecondary'}
        />
        <FormikTextInput
          name='repositoryName'
          placeholder='Repository name'
          style={styles.inputFields}
          color={'textSecondary'}
        />
        <FormikTextInput
          name='rating'
          placeholder='Rating between 0 and 100'
          keyboardType='number-pad'
          style={styles.inputFields}
          color={'textSecondary'}
        />
        <FormikTextInput
          name='text'
          placeholder='Review'
          multiline
          style={styles.inputFields}
          color={'textSecondary'}
        />
        <Button onPress={onSubmit} title='Create a review' />
      </View>
    </View>
  );
};

export const ReviewContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={ValidationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const Review = () => {
  const history = useHistory();
  const [createReview] = useCreateReview();

  const onSubmit = async (values) => {
    const { repositoryName, ownerName, rating, text } = values;

    console.log(values);

    try {
      const { data } = await createReview({
        repositoryName,
        ownerName,
        rating,
        text,
      });
      const { repositoryId } = data.createReview;
      history.push(`/${repositoryId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return <ReviewContainer onSubmit={onSubmit} />;
};

export default Review;

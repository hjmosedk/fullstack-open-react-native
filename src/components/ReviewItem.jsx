import React from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';
import { format, parseISO } from 'date-fns';
import { useHistory } from 'react-router-native';

import useDeleteReview from '../hooks/useDeleteReview';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
  },
  imageContainer: {
    flexGrow: 0,
    padding: 15,
  },
  view: {
    padding: 15,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
  },
  rating: {
    width: 50,
    height: 50,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderRadius: 25,
    alignContent: 'center',
    flexGrow: 0,
    marginRight: 20,
  },
  ratingContent: {
    alignItems: 'center',
    marginLeft: 12,
    marginTop: 13,
  },
  infoBox: {
    flexDirection: 'column',
    paddingRight: 15,
    flexGrow: 0,
    flexShrink: 1,
  },
  buttonsContainer: {
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    paddingRight: 15,
    paddingTop: 25,
  },
});

const ReviewItem = ({ reviews, MyReviews }) => {
  const { text, rating, createdAt, user, repository, id, repositoryId } =
    reviews;
  const { username } = user;
  const { fullName } = repository;
  const history = useHistory();
  const [deleteReview] = useDeleteReview();

  const handleDelete = async (id) => {
    try {
      await deleteReview({ id });
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteReview = () => {
    Alert.alert(
      'Delete Review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => handleDelete(id),
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <View style={styles.headerContainer}>
          <View style={styles.rating}>
            <Text
              style={styles.ratingContent}
              color='primary'
              fontWeight='bold'
            >
              {rating}
            </Text>
          </View>
          <View style={styles.infoBox}>
            {!MyReviews && (
              <Text fontSize='Heading' fontWeight='bold'>
                {username}
              </Text>
            )}
            {MyReviews && (
              <Text fontSize='Heading' fontWeight='bold'>
                {fullName}
              </Text>
            )}
            <Text color='textSecondary'>
              {format(parseISO(createdAt), 'y-MM-ii')}
            </Text>
            <Text>{text}</Text>
          </View>
        </View>
        {MyReviews && (
          <View style={styles.buttonsContainer}>
            <View style={styles.buttons}>
              <View style={styles.button}>
                <Button
                  title='View Repository'
                  onPress={() => history.push(`/${repositoryId}`)}
                />
              </View>
              <View style={styles.button}>
                <Button
                  title='Delete Review'
                  color='#d73a4a'
                  onPress={handleDeleteReview}
                />
              </View>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default ReviewItem;

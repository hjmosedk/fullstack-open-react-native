import React from 'react';
import { View, StyleSheet } from 'react-native';
import { format, parseISO } from 'date-fns';

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
});

const ReviewItem = ({ reviews }) => {
  const { text, rating, createdAt, user } = reviews;
  const { username } = user;
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
            <Text fontSize='Heading' fontWeight='bold'>
              {username}
            </Text>
            <Text color='textSecondary'>
              {format(parseISO(createdAt), 'y-MM-ii')}
            </Text>
            <Text>{text}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;

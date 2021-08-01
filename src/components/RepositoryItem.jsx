import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from './Card';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
  },
});

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.container}>
      <View>
        <Card repository={repository} />
      </View>
    </View>
  );
};

export default RepositoryItem;

/*
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: `${ownerAvatarUrl}` }} />
        </View>
        <View style={styles.mainText}>
          <Text fontSize='Heading' fontWeight='bold'>
            {fullName}
          </Text>
          <Text color='textSecondary'>{description}</Text>
        </View>
*/

import React from 'react';
import { useParams } from 'react-router-native';
import { FlatList, View, StyleSheet } from 'react-native';
import useRepository from '../hooks/useRepository';
import useReviews from '../hooks/useReviews';
import ReviewItem from './ReviewItem';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);
  const { reviews, fetchMore } = useReviews(id);

  const renderingRepository = repository ? repository : [];

  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : [];

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList
      data={reviewNodes}
      ListHeaderComponent={() => (
        <RepositoryItem repository={renderingRepository} button />
      )}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem reviews={item} />}
      keyExtractor={({ id }) => id}
    />
  );
};

export default SingleRepository;

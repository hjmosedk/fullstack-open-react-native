import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { useHistory } from 'react-router-native';
import Card from './Card';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
  },
  view: {
    padding: 15,
  },
});

const RepositoryItem = ({ repository, button }) => {
  const history = useHistory();
  const { id } = repository;

  const onPress = () => {
    history.push(`/${id}`);
  };

  return (
    <Pressable style={styles.container} onLongPress={onPress}>
      <View style={styles.view}>
        <Card repository={repository} button={button} />
      </View>
    </Pressable>
  );
};

export default RepositoryItem;

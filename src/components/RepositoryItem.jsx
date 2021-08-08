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
  splitter: {
    height: 10,
    backgroundColor: theme.colors.background,
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
      {button && <View style={styles.splitter} />}
    </Pressable>
  );
};

export default RepositoryItem;

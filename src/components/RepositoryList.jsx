import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import SortingMenu from './SortingMenu';

import useRepositories from '../hooks/useRepositories';

export const RepositoryListContainer = ({
  repositories,
  setSortBy,
  currentSelection,
  setCurrentSelection,
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ListHeaderComponent={() => (
        <SortingMenu
          setSortBy={setSortBy}
          currentSelection={currentSelection}
          setCurrentSelection={setCurrentSelection}
        />
      )}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem repository={item} />}
      keyExtractor={(item) => item.fullName}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const [SortBy, setSortBy] = useState(['CREATED_AT', 'DESC']);
  const [currentSelection, setCurrentSelection] = useState(
    'Latest Repositories, default',
  );
  const { repositories } = useRepositories(SortBy);

  return (
    <RepositoryListContainer
      repositories={repositories}
      setSortBy={setSortBy}
      currentSelection={currentSelection}
      setCurrentSelection={setCurrentSelection}
    />
  );
};

export default RepositoryList;

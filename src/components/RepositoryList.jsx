import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import SortingMenu from './SortingMenu';

import useRepositories from '../hooks/useRepositories';

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const props = this.props;

    return (
      <SortingMenu
        setSortBy={props.setSortBy}
        currentSelection={props.currentSelection}
        setCurrentSelection={props.setCurrentSelection}
        searchKeyword={props.searchKeyword}
        setSearchKeyword={props.setSearchKeyword}
      />
    );
  };

  render() {
    const repositories = this.props.repositories;
    const onEndReach = this.props.onEndReach;
    const repositoryNodes = repositories
      ? repositories.edges.map((edge) => edge.node)
      : [];

    return (
      <FlatList
        data={repositoryNodes}
        ListHeaderComponent={this.renderHeader}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem repository={item} />}
        keyExtractor={(item) => item.fullName}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const [SortBy, setSortBy] = useState(['CREATED_AT', 'DESC']);
  const [searchKeyword, setSearchKeyword] = useState();
  const [searchTextValue] = useDebounce(searchKeyword, 500);

  const [currentSelection, setCurrentSelection] = useState(
    'Latest Repositories, default',
  );

  const { repositories, fetchMore } = useRepositories({
    orderBy: SortBy[0],
    orderDirection: SortBy[1],
    searchTextValue,
    first: 8,
  });

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      onEndReach={onEndReach}
      setSortBy={setSortBy}
      currentSelection={currentSelection}
      setCurrentSelection={setCurrentSelection}
      searchKeyword={searchKeyword}
      setSearchKeyword={setSearchKeyword}
    />
  );
};

export default RepositoryList;

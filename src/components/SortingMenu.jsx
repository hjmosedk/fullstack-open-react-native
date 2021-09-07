import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Menu, Searchbar, Button } from 'react-native-paper';
import theme from '../theme';
import Text from './Text';

const SortingMenu = ({
  setSortBy,
  currentSelection,
  setCurrentSelection,
  searchKeyword,
  setSearchKeyword,
}) => {
  const [visibility, setVisibility] = useState(false);

  const openMenu = () => setVisibility(true);

  const closeMenu = () => setVisibility(false);

  const styles = StyleSheet.create({
    menuItem: {
      padding: 15,
    },
    informativeText: {
      paddingTop: 15,
      paddingBottom: 5,
    },
    button: {
      borderStyle: 'solid',
      borderColor: theme.colors.white,
      borderWidth: 1,
    },
  });

  const handleSearch = (value) => {
    setSearchKeyword(value);
  };

  return (
    <View style={styles.menuItem}>
      <Searchbar
        placeholder='Search for repository'
        onChangeText={handleSearch}
        value={searchKeyword}
      />
      <View>
        <Text fontWeight='bold' style={styles.informativeText}>
          Select an item below to further sort your list:
        </Text>
        <Menu
          visible={visibility}
          onDismiss={closeMenu}
          anchor={
            <Button style={styles.button} onPress={openMenu}>
              <Text>{currentSelection}</Text>
            </Button>
          }
        >
          <Menu.Item title='Select an item...' disabled></Menu.Item>
          <Menu.Item
            onPress={() => {
              setSortBy(['CREATED_AT', 'DESC']);
              setCurrentSelection('Latest Repositories, default');
              closeMenu();
            }}
            title='Latest Repositories, default'
          ></Menu.Item>
          <Menu.Item
            onPress={() => {
              setSortBy(['RATING_AVERAGE', 'DESC']);
              setCurrentSelection('Highest Rating');
              closeMenu();
            }}
            title='Highest Rating'
          ></Menu.Item>
          <Menu.Item
            onPress={() => {
              setSortBy(['RATING_AVERAGE', 'ASC']);
              setCurrentSelection('Lowest Rating');
              closeMenu();
            }}
            title='Lowest Rating'
          ></Menu.Item>
        </Menu>
      </View>
    </View>
  );
};

export default SortingMenu;

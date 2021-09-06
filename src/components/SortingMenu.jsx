import React, { useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Menu } from 'react-native-paper';
import Text from './Text';

const SortingMenu = ({ setSortBy, currentSelection, setCurrentSelection }) => {
  const [visibility, setVisibility] = useState(false);

  const openMenu = () => setVisibility(true);

  const closeMenu = () => setVisibility(false);

  const styles = StyleSheet.create({
    menuItem: {
      padding: 15,
      flexDirection: 'row',
    },
  });

  return (
    <View style={styles.menuItem}>
      <Menu
        visible={visibility}
        onDismiss={closeMenu}
        anchor={
          <Pressable onPress={openMenu}>
            <Text fontWeight='bold'>{currentSelection}</Text>
          </Pressable>
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
  );
};

export default SortingMenu;

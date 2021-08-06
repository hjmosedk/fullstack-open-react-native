import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';

const style = StyleSheet.create({
  tab: {
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 25,
    flexGrow: 0,
  },
});

const AppBarTab = ({ tabTitle, link, onPress }) => {
  return (
    <Pressable onPressIn={onPress} style={style.tab}>
      <Link to={link}>
        <Text fontWeight='bold' color='white'>
          {tabTitle}
        </Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;

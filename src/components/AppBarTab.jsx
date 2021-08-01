import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
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

const AppBarTab = ({ tabTitle, link }) => {
  return (
    <View style={style.tab}>
      <Pressable onPress={() => {}}>
        <Link to={link}>
          <Text fontWeight='bold' color='white'>
            {tabTitle}
          </Text>
        </Link>
      </Pressable>
    </View>
  );
};

export default AppBarTab;

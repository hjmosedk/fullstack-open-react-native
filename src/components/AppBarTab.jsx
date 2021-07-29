import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';

const style = StyleSheet.create({
  tab: {
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 25,
  },
});

const AppBarTab = ({ tabTitle }) => {
  return (
    <View style={style.tab}>
      <Pressable onPress={() => {}}>
        <Text fontWeight='bold' color='white'>
          {tabTitle}
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBarTab;

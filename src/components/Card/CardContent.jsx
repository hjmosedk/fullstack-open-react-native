import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from '../Text';
import theme from '../../theme';

const cardContentStyle = StyleSheet.create({
  container: {
    marginLeft: 85,
    flexDirection: 'row',
  },
  text: {
    paddingVertical: 3,
    paddingHorizontal: 6,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    flexGrow: 0,
  },
});

const CardContent = ({ language }) => {
  return (
    <View style={cardContentStyle.container}>
      <Text
        testID='language'
        style={cardContentStyle.text}
        color='white'
        background='blue'
        fontWeight='bold'
      >
        {language}
      </Text>
    </View>
  );
};

export default CardContent;
